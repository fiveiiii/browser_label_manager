import LabelListItem from "./labelListItem";
type item = {
  title: string;
  link: string;
  icon: string;
  list: Array<LabelListItem>;
};
export default class LabelTypeList {
  default: item = { title: "", icon: "", link: "", list: [] };
  game: item = {
    title: "",
    link: "",
    icon: "",
    list: [],
  };
  study: item = {
    title: "",
    link: "",
    icon: "",
    list: [],
  };
  photoReports: item = {
    title: "",
    link: "",
    icon: "",
    list: [],
  };
}
