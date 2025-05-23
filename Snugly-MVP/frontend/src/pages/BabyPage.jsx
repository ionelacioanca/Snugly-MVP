import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import babyService from "../services/babyService"; 
import { useNavigate } from "react-router-dom";

const BabyPage = () => {
  const [baby, setBaby] = useState({
    name: "",
    sex: "",
    birthDate: "",
    birthTime: "",
    birthWeight: "",
    birthLength: "",
    birthType: "Natural",
    gestationalWeeks: "",
    knownAllergies: "",
  });

  const toggleSex = () => {
    setBaby((prev) => ({
      ...prev,
      sex: prev.sex === "Girl" ? "Boy" : "Girl",
    }));
  };

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBaby({ ...baby, [name]: value });
  };

  // Stiluri dinamice
  const backgroundStyle =
    baby.sex === "Girl"
      ? {
          background: "linear-gradient(135deg, #ffe8f0, #ffe0da, #ffefdb)",
        }
      : baby.sex === "Boy"
      ? {
          background: "linear-gradient(135deg, #e3f0fb, #c7eaff, #d9f4f2)",
        }
      : {
          background:
            "linear-gradient(135deg, #fce4ec, #e0f7fa, #fff9c4, #f3e5f5)",
        };

  const accentColor =
    baby.sex === "Girl"
      ? "#e492a3"
      : baby.sex === "Boy"
      ? "#7fb5d8"
      : "linear-gradient(to right, #c2e9fb, #f3e5f5, #fff9c4,#e0f7fa, #fce4ec)";

  const titleColor =
    baby.sex === "Girl"
      ? "#d96c8a"
      : baby.sex === "Boy"
      ? "#5c9ed8"
      : "linear-gradient(to right, #c2e9fb, #f3e5f5, #fff9c4,#e0f7fa, #fce4ec)";

  const formBg =
    baby.sex === "Girl"
      ? "#fff0f5"
      : baby.sex === "Boy"
      ? "#f0faff"
      : "#fffdf8";

  const borderColorName =
    baby.sex === "Girl"
      ? "#F8A5C2"
      : baby.sex === "Boy"
      ? "#A4D8E1"
      : "#F8A5C2";

  const borderColorBirthDate =
    baby.sex === "Girl"
      ? "#FBC490"
      : baby.sex === "Boy"
      ? "#A8E6CF"
      : "#FBC490"; 
      
  const borderColorBirthTime =
    baby.sex === "Girl"
      ? "#FAF3A0"
      : baby.sex === "Boy"
      ? "#D6F0F0"
      : "#FAF3A0";
      
  const borderColorBirthWeight =
    baby.sex === "Girl"
      ? "#FF6961"
      : baby.sex === "Boy"
      ? "#B0E0E6"
      : "#A8E6CF";

  const borderColorBirthLength =
    baby.sex === "Girl"
      ? "#FFA07A"
      : baby.sex === "Boy"
      ? "#D0F0C0"
      : "#A0D8F1";

  const borderColorBirthType =
    baby.sex === "Girl"
      ? "#FAFAD2"
      : baby.sex === "Boy"
      ? "#AFEEEE"
      : "#D6AEDD";

  const borderColorBirthWeeks =
    baby.sex === "Girl"
      ? "#FFE4E1"
      : baby.sex === "Boy"
      ? "#F0F8FF"
      : "#F8A5C2";

  const borderColorAllergies =
    baby.sex === "Girl"
      ? "#FFEFD5"
      : baby.sex === "Boy"
      ? "#90EE90"
      : "#FBC490";

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        ...backgroundStyle,
        transition: "all 0.4s ease-in-out",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
                const response = babyService.createBaby(baby);
                console.log("Baby created successfully:", response);
                alert("Baby details saved successfully!");
                navigate("/dashboard");
          } catch (error) {
                console.error("Error creating baby:", error);
                alert("Failed to save baby details.");
          }
        }}
        className="p-4 rounded shadow"
        style={{
          maxWidth: "460px",
          width: "100%",
          backgroundColor: formBg,
          border: "2px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <h2
          className="mb-4 text-center position-relative"
          style={{
            fontFamily: "'Fredoka One', cursive",
            textTransform: "uppercase",
            fontWeight: "900",
            fontSize: "2.6rem",
            letterSpacing: "0.12em",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              color: "rgba(0, 0, 0, 0.15)",
              zIndex: 0,
              transform: "translate(2px, 4px)", 
              filter: "blur(2px)", 
            }}
          >
            Baby Details
          </span>
          <span
            style={{
              background: titleColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              zIndex: 1,
            }}
          >
            Baby Details
          </span>
        </h2>


        {/* Nume */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={baby.name}
            onChange={handleChange}
            placeholder="Baby's Name"
            required
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorName }}
          />
        </div>

        {/* SWITCH SEX */}
        <div className="mb-4 text-center">
          <div
            style={{
              position: "relative",
              borderRadius: "30px",
              width: "160px",
              height: "40px",
              margin: "0 auto",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 15px",
              fontWeight: "600",
              fontSize: "1rem",
              userSelect: "none",
              background:
                baby.sex === "Girl"
                  ? "linear-gradient(90deg, #f9b3c2, #e07fa7)"
                  : baby.sex === "Boy"
                  ? "linear-gradient(90deg, #8ac6f2, #5c9ed8)"
                  : "#eae0d5",
              transition: "all 0.4s ease-in-out",
            }}
            onClick={toggleSex}
          >
            <span
              style={{
                color: baby.sex === "Girl" ? "#fff" : "#888",
                flex: 1,
                textAlign: "left",
              }}
            >
              Girl
            </span>
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                position: "absolute",
                top: "6px",
                left: baby.sex === "Boy" ? "126px" : "6px",
                transition: "all 0.4s ease",
              }}
            />
            <span
              style={{
                color: baby.sex === "Boy" ? "#fff" : "#888",
                flex: 1,
                textAlign: "right",
              }}
            >
              Boy
            </span>
          </div>
        </div>

        {/* RESTUL câmpurilor */}
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={baby.birthDate}
            onChange={handleChange}
            required
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorBirthDate }}
          />
        </div>

        <div className="mb-3">
          <input
            type="time"
            className="form-control"
            name="birthTime"
            value={baby.birthTime}
            onChange={handleChange}
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorBirthTime }}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="birthWeight"
            value={baby.birthWeight}
            onChange={handleChange}
            placeholder="Birth Weight (g)"
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorBirthWeight }}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="birthLength"
            value={baby.birthLength}
            onChange={handleChange}
            placeholder="Birth Length (cm)"
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorBirthLength }}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            name="birthType"
            value={baby.birthType}
            onChange={handleChange}
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorBirthType }}
          >
            <option value="Natural">Natural</option>
            <option value="C-Section">C-Section</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="gestationalWeeks"
            value={baby.gestationalWeeks}
            onChange={handleChange}
            placeholder="Gestational Weeks"
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorBirthWeeks }}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            name="knownAllergies"
            value={baby.knownAllergies}
            onChange={handleChange}
            placeholder="Known Allergies (optional)"
            style={{ backgroundColor: "#fefaf6", borderColor: borderColorAllergies }}
          />
        </div>

        {/* Submit */}
         <button
          type="submit"
          className="btn w-100"
          style={{
            background: accentColor,
            color: "#a8b8d0",
            fontWeight: "600",
            border: "none",
            borderRadius: "14px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          Save Baby Details
        </button>
      </form>
    </div>
  );
};

export default BabyPage;
