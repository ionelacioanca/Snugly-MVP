import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBaby({ ...baby, [name]: value });
  };

  // Fundal dinamic
  const backgroundStyle =
    baby.sex === "Girl"
      ? {
          background:
            "linear-gradient(135deg, #ffeef5, #fcd6e0, #f8b9c8)",
        }
      : baby.sex === "Boy"
      ? {
          background:
            "linear-gradient(135deg, #e3f0fb, #bedef6, #a7cdf0)",
        }
      : {
          background: "linear-gradient(135deg, #fdf8f2 0%, #f0e7db 100%)",
        };

  const accentColor =
    baby.sex === "Girl"
      ? "#e07fa7"
      : baby.sex === "Boy"
      ? "#5c9ed8"
      : "#b59f89";

  const titleColor =
    baby.sex === "Girl"
      ? "#e07fa7"
      : baby.sex === "Boy"
      ? "#5c9ed8"
      : "#b59f89";

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
          console.log("Baby data:", baby);
        }}
        className="p-4 rounded shadow"
        style={{
          maxWidth: "460px",
          width: "100%",
          backgroundColor: "#fffdf8",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* TITLU */}
        <h2
          className="mb-4 text-center"
          style={{
            fontFamily: "'Fredoka One', cursive",
            textTransform: "uppercase",
            color: titleColor,
            fontWeight: "900",
            fontSize: "2.8rem",
            textShadow:
              "2px 2px 0 #e8dccb, 4px 4px 0 #f0e7db, 6px 6px 5px rgba(0,0,0,0.1)",
            letterSpacing: "0.15em",
            transition: "color 0.4s ease",
          }}
        >
          Baby Details
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
            style={{ backgroundColor: "#fefaf6", borderColor: "#decbb2" }}
          />
        </div>

        {/* SWITCH SEX - SLIDER */}
        <div className="mb-4 text-center">
          <div
            style={{
              position: "relative",
              backgroundColor: "#f2f2f2",
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
              color: "#fff",
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

        {/* Restul câmpurilor */}
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={baby.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="time"
            className="form-control"
            name="birthTime"
            value={baby.birthTime}
            onChange={handleChange}
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
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            name="birthType"
            value={baby.birthType}
            onChange={handleChange}
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
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: accentColor,
            color: "white",
            fontWeight: "600",
            fontSize: "1.1rem",
          }}
        >
          Save Baby Info
        </button>
      </form>
    </div>
  );
};

export default BabyPage;
