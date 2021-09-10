import React, { useEffect, useState } from "react";
import moment from "moment";
import usePagination from "./Pagination";
import axios from "axios";
import ModalDetail from "./ModalDetail";
import { Pagination } from "@material-ui/lab";
import { ImHome } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { GiBank } from "react-icons/gi";
import { AiFillGift } from "react-icons/ai";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import {
  functionBalance,
  functionTotalIncomes,
  functionTotalExpenses,
  functionOperationType,
} from "./axios";
import {
  FaBusAlt,
  FaShoppingCart,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaTableTennis,
} from "react-icons/fa";

const operationImage = (operation) => {
  if (operation === "income") {
    return <HiArrowCircleUp className="color_incomes" />;
  } else {
    return <HiArrowCircleDown className="color_expenses" />;
  }
};

const truncate = (str, n) =>
  str?.length > n ? str.substring(0, n - 1) + "..." : str; //funcion para recortar parrafos y dejar los ...

export const categoryImage = (category) => {
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
    case "vacation":
      return <FaUmbrellaBeach />;
    case "leisure":
      return <FaTableTennis />;
    case "other":
      return <AiFillGift />;
    default:
      console.log(category);
  }
};

export const operationType = [
  { id: 1, name: "income" },
  { id: 2, name: "expense" },
];
export const category = [
  { id: 1, name: "home" },
  { id: 2, name: "health" },
  { id: 3, name: "food" },
  { id: 4, name: "transport" },
  { id: 5, name: "pet" },
  { id: 6, name: "shopping" },
  { id: 7, name: "bank" },
  { id: 8, name: "cash" },
  { id: 9, name: "education" },
  { id: 10, name: "vacation" },
  { id: 11, name: "leisure" },
  { id: 12, name: "other" },
];

function Row({
  data,
  user,
  setBalance,
  setTotalIncomes,
  setTotalExpenses,
  operation,
  setOperation,
}) {
  const [media, setMedia] = useState(false);
  const viewport = window.matchMedia("(max-width: 400px)");

  let [page, setPage] = useState(1);
  const per_page = 8;

  const count = Math.ceil(data?.length / per_page);
  const _DATA = usePagination(data, per_page);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handlerMedia = (e) => {
    if (e.matches) {
      setMedia(true);
    } else {
      setMedia(false);
    }
  };
  const handleHome = () => {
    functionBalance(user, setBalance);
    functionTotalIncomes(user, 1, setTotalIncomes);
    functionTotalExpenses(user, 2, setTotalExpenses);
  };
  const handleDelete = (operationiId) => {
    axios
      .delete(`http://localhost:3001/delete/operation`, {
        data: { id: operationiId },
      })
      .then(() => {
        setBalance && handleHome();
        operation[0]?.operation === "income" &&
          functionOperationType(user, 1, setOperation);
        operation[0]?.operation === "expense" &&
          functionOperationType(user, 2, setOperation);
      })
      .catch((err) => console.log(err));
  };

  if (viewport.matches && !media) {
    setMedia(true);
  }
  useEffect(() => {
    viewport.addEventListener("change", handlerMedia);

    return () => {
      viewport.removeEventListener("change", handlerMedia);
    };
  }, [viewport, data]);

  return (
    <>
      {_DATA ? (
        _DATA.currentData()?.map((x, i) => (
          <div key={i} className="row">
            <div>{operationImage(x.operation)}</div>
            <div>{categoryImage(x.category)}</div>
            <div className="row_text">
              <p className="margin_rigth">{x.amount}$</p>
              <p>{moment(x.date).format("L")}</p>
              <ModalDetail
                description={media ? truncate(x.concept, 11) : x.concept}
              />
              {/* <p>{media ? truncate(x.concept, 11) : x.concept}</p> */}
            </div>
            <button className="button_banish">
              <BiEditAlt />
            </button>
            <button
              onClick={() => {
                handleDelete(x.id);
                setBalance && handleHome();
              }}
              className="button_banish"
            >
              <BiTrash />
            </button>
          </div>
        ))
      ) : (
        <p> no row</p>
      )}

      {data?.length === 0 && (
        <p className="no_operation">
          you dont have any operation in this category yet
        </p>
      )}

      <div className="paginationComponent">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Row;
