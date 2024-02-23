import React, { useEffect, useState } from "react";

import axios from "axios";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import styles from "../styles/pages/Register.module.css";
import imageCompression from "browser-image-compression";

const qrs = {
  30: "/qrs/30rs.jpeg",
  50: "/qrs/50rs.png",
};

const units = ["bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

function niceBytes(x) {
  let l = 0,
    n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}
const imageSize = (file) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  const promise = new Promise((resolve, reject) => {
    reader.onload = function (e) {
      const image = new Image();

      image.src = e.target.result;

      image.onload = function () {
        const height = this.height;
        const width = this.width;

        resolve({ width, height });
      };

      image.onerror = reject;
    };
  });

  return promise;
};

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const Register = () => {
  const years = ["1st", "2nd", "3rd", "4th"];
  const events = [
    "Algo Mania",
    "DesignX 2.0",
    "Hackathon",
    "Mock Placement",
    // "Binary Breakout",
  ];

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    college_name: "",
    college_department: "",
    current_year: "1st",
    event_name: "Algo Mania",
    payment_id: "",
    team_members: [],
    teammember1: "",
    teammember2: "",
    teammember3: "",
    is_team_event: false,
    payment_screenshot: "",
  });

  const [fees, setFees] = useState(0);

  const [loading, setLoading] = useState(false);

  const compressImage = async (file) => {
    const imageDimensions = await imageSize(file);
    console.log({ imageDimensions, size: niceBytes(file.size) });

    const options = {
      maxSizeMB: 0.05,
      maxWidthOrHeight:
        imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
      useWebWorker: true,
    };

    const compressedImg = await imageCompression(file, options);

    return compressedImg;
  };

  const uploadImage = async (files) => {
    const image = await compressImage(files[0]);
    const imageDimensions = await imageSize(image);
    const base64 = await convertToBase64(image);
    console.log(base64);
    setData({ ...data, payment_screenshot: base64 });
    console.log({ Compressed: imageDimensions, size: niceBytes(image.size) });
  };

  useEffect(() => {
    if (
      data.event_name === "Algo Mania" ||
      data.event_name === "Mock Placement" ||
      data.event_name === "DesignX 2.0"
      // data.event_name === "Binary Breakout"
    ) {
      setFees(30);
    } else if (data.event_name === "Hackathon") {
      setFees(50);
      // let fee = 150;
      // if (data.teammember1.length > 0) {
      //   fee += 150;
      // }
      // if (data.teammember2.length > 0) {
      //   fee += 150;
      // }
      // if (data.teammember3.length > 0) {
      //   fee += 150;
      // }
    }
    //  else if (
    //   data.event_name === "DesignX 2.0" ||
    //   data.event_name === "Binary Breakout"
    // ) {
    //   let fee = 30;
    //   if (data.teammember1.length > 0) {
    //     fee += 30;
    //   }
    //   if (data.teammember2.length > 0) {
    //     fee += 30;
    //   }
    //   if (data.teammember3.length > 0) {
    //     fee += 30;
    //   }
    //   setFees(fee);
    // }
  }, [data]);

  const onYearChange = (e) => {
    setData({ ...data, current_year: e.target.value });
  };

  const onEventChange = (e) => {
    const _event = e.target.value;
    setData({
      ...data,
      event_name: _event,
      teammember1: "",
      teammember2: "",
      teammember3: "",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      data.first_name.length < 1 ||
      data.last_name.length < 1 ||
      data.email.length < 1 ||
      data.contact.length < 1 ||
      data.college_name.length < 1 ||
      data.college_department.length < 1 ||
      data.payment_id.length < 1 ||
      data.payment_screenshot.length < 1
    ) {
      notifyError("Please fill all required fields");
      setLoading(false);
    } else if (
      data.event_name === "Algo Mania" ||
      data.event_name === "Mock Placement"
    ) {
      const team = `[${data.first_name} ${data.last_name}]`;

      try {
        console.log("formdata", data);
        console.log(`${process.env.REACT_APP_NODE_BACKEND}api/register`);
        const response = await axios.post(
          `${process.env.REACT_APP_NODE_BACKEND}api/register`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (
          response.data.code === 11000 &&
          response.data.keyPattern &&
          response.data.keyPattern.payment_id
        ) {
          console.log("response", response);
          console.log("response data", response.data);
          notifyError(
            "Duplicate Payment Id Detected. Please enter a different Id."
          );
        } else {
          console.log("response", response);
          console.log("response data", response.data);

          notifySuccess("Your registration has been successfully completed.");
        }

        setData({
          first_name: "",
          last_name: "",
          email: "",
          contact: "",
          college_name: "",
          college_department: "",
          current_year: "1st",
          event_name: "Algo Mania",
          payment_id: "",
          team_members: [],
          teammember1: "",
          teammember2: "",
          teammember3: "",
          is_team_event: false,
          payment_screenshot: "",
        });
      } catch (error) {
        notifyError(
          "Error occured while submiting the form. Please try again."
        );
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else if (
      data.event_name !== "Algo Mania" ||
      data.event_name !== "Mock Placement"
    ) {
      let team = [];
      team.push(`"${data.first_name} ${data.last_name}"`);
      if (data.teammember1.length > 0) {
        team.push(`"${data.teammember1}"`);
      }
      if (data.teammember2.length > 0) {
        team.push(`"${data.teammember2}"`);
      }
      if (data.teammember3.length > 0) {
        team.push(`"${data.teammember3}"`);
      }

      setData({
        ...data,
        team_members: [data.teammember1, data.teammember2, data.teammember3],
      });

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_NODE_BACKEND}api/register`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        notifySuccess("Your registration has been successfully completed.");

        setData({
          first_name: "",
          last_name: "",
          email: "",
          contact: "",
          college_name: "",
          college_department: "",
          current_year: "1st",
          event_name: "Algo Mania",
          payment_id: "",
          team_members: [],
          teammember1: "",
          teammember2: "",
          teammember3: "",
          is_team_event: false,
          payment_screenshot: "",
        });
        console.log(data);
      } catch (error) {
        notifyError(
          "Error occured while submiting the form. Please try again."
        );
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.register}>
      <Helmet>
        <title>Mpulse Ignite 2024 | Register</title>
      </Helmet>

      {/* <img src="/ignite-logo.png" alt="ignite-logo" /> */}
      <h1>Event Registration</h1>
      <form onSubmit={onSubmitForm}>
        <div className={styles.row}>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="firstname"
              className={styles.formcontrol}
              required
              value={data.first_name}
              onChange={(e) => setData({ ...data, first_name: e.target.value })}
            />
            <label htmlFor="firstname" className={styles.floatinglabel}>
              First name <span>*</span>
            </label>
          </div>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="lastname"
              className={styles.formcontrol}
              required
              value={data.last_name}
              onChange={(e) => setData({ ...data, last_name: e.target.value })}
            />
            <label htmlFor="lastname" className={styles.floatinglabel}>
              Last name <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="email"
              className={styles.formcontrol}
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label className={styles.floatinglabel} htmlFor="email">
              Email <span>*</span>
            </label>
          </div>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="contact"
              className={styles.formcontrol}
              required
              value={data.contact}
              onChange={(e) => setData({ ...data, contact: e.target.value })}
            />
            <label className={styles.floatinglabel} htmlFor="contact">
              Contact number <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="collegename"
              className={styles.formcontrol}
              required
              value={data.college_name}
              onChange={(e) =>
                setData({ ...data, college_name: e.target.value })
              }
            />
            <label className={styles.floatinglabel} htmlFor="collegename">
              College name <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="department"
              className={styles.formcontrol}
              required
              value={data.college_department}
              onChange={(e) =>
                setData({ ...data, college_department: e.target.value })
              }
            />
            <label className={styles.floatinglabel} htmlFor="department">
              Department <span>*</span>
            </label>
          </div>
          <div className={styles.floatinglabelgroup}>
            <label className={styles.floatinglabelselect} htmlFor="year">
              Year <span>*</span>
            </label>
            <select onChange={onYearChange}>
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.floatinglabelgroup}>
            <label className={styles.floatinglabelselect} htmlFor="eventname">
              Select Event Name <span>*</span>
            </label>
            <select onChange={onEventChange}>
              {events.map((event) => (
                <option key={event}>{event}</option>
              ))}
            </select>
          </div>
        </div>
        {(data.event_name === "Hackathon" ||
          data.event_name === "Binary Breakout" ||
          data.event_name === "Algo Mania" ||
          data.event_name === "DesignX 2.0") && (
          <>
            <div className={styles.row1}>
              <div className={styles.floatinglabelgroup}>
                <input
                  type="text"
                  id="teammember1"
                  className={styles.formcontrol}
                  onChange={(e) =>
                    setData({ ...data, teammember1: e.target.value })
                  }
                />
                <label className={styles.floatinglabel} htmlFor="teammember1">
                  Team member-2
                </label>
              </div>
            </div>
            {data.event_name !== "Algo Mania" && (
              <div className={styles.row1}>
                <div className={styles.floatinglabelgroup}>
                  <input
                    type="text"
                    id="teammember2"
                    className={styles.formcontrol}
                    onChange={(e) =>
                      setData({ ...data, teammember2: e.target.value })
                    }
                  />
                  <label className={styles.floatinglabel} htmlFor="teammember2">
                    Team member-3
                  </label>
                </div>
              </div>
            )}
            {data.event_name !== "DesignX 2.0" &&
              data.event_name !== "Algo Mania" && (
                <div className={styles.row1}>
                  <div className={styles.floatinglabelgroup}>
                    <input
                      type="text"
                      id="teammember3"
                      className={styles.formcontrol}
                      onChange={(e) =>
                        setData({ ...data, teammember3: e.target.value })
                      }
                    />
                    <label
                      className={styles.floatinglabel}
                      htmlFor="teammember3"
                    >
                      Team member-4
                    </label>
                  </div>
                </div>
              )}
          </>
        )}
        <div className={styles.row1}>
          <div className={styles.floatinglabelgroup}>
            <input
              type="text"
              id="paymentid"
              className={styles.formcontrol}
              required
              value={data.payment_id}
              onChange={(e) => setData({ ...data, payment_id: e.target.value })}
            />
            <label className={styles.floatinglabel} htmlFor="paymentid">
              Payment ID <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.floatinglabelgroup}>
          <input
            type="file"
            id="paymentscreenshot"
            onChange={(e) => uploadImage(e.target.files)}
            // onChange={(e) =>
            //   setData({ ...data, payment_screenshot: e.target.files[0] })
            // }
          />
          <label className={styles.floatinglabel} htmlFor="paymentscreenshot">
            Payment screenshot <span>*</span>
          </label>
        </div>
        <p>
          Please pay Rs. {fees} for {data.event_name} on below QR
        </p>
        <div className={styles.qr}>
          <img src={qrs[fees]} alt={`${fees}-qr`} />
        </div>
        <button>{loading ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default Register;
