import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit"
import { studentsNetoservicesActions } from "../store/students.netoservices.slice";

const actions = {
  ...studentsNetoservicesActions,
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}