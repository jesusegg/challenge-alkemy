import React, { useEffect, useState } from "react";
import { ImHome } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import {
  FaBusAlt,
  FaShoppingCart,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaTableTennis,
} from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { GiBank } from "react-icons/gi";
import { AiFillGift } from "react-icons/ai";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const operationImage = (operation) => {
  if (operation === "income") {
    return <HiArrowCircleUp className="color_incomes" />;
  } else {
    return <HiArrowCircleDown className="color_expenses" />;
  }
};

const truncate = (str, n) =>
  str?.length > n ? str.substring(0, n - 1) + "..." : str; //funcion para recortar parrafos y dejar los ...

const categoryImage = (category) => {
  switch (category) {
    case "home":
      return <ImHome />;
    case "health":
      return <FaHeartbeat />;
    case "food":
      return <IoFastFood />;
    case "transport":
      return <FaBusAlt />;
    case "pet":
      return <MdPets />;
    case "shopping":
      return <FaShoppingCart />;
    case "bank":
      return <GiBank />;
    case "cash":
      return <IoMdCash />;
    case "education":
      return <FaGraduationCap />;
    case "vacations":
      return <FaUmbrellaBeach />;
    case "leisure":
      return <FaTableTennis />;
    case "others":
      return <AiFillGift />;
    default:
      console.log(category);
  }
};

function Row() {
  const [media, setMedia] = useState(false);
  const mql = window.matchMedia("(max-width: 400px)");

  mql.addEventListener("change", (e) => {
    if (e.matches) {
      setMedia(true);
    } else {
      setMedia(false);
    }
  });

  return (
    <div className="row">
      {operationImage("income")}
      {categoryImage("cash")}
      <p>$300 </p>
      <p>10/05/2021</p>
      <p>
        {media
          ? truncate("bank transferparami", 15)
          : "bank transferparamiiiiiiiiiii"}
      </p>
      <button className="button_banish">
        <BiEditAlt />
      </button>
      <button className="button_banish">
        <BiTrash />
      </button>
    </div>
  );
}

export default Row;
