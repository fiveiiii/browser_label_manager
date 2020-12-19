import LabelTypeList from "./labelTypeList";

export default class LabelListItem {
  icon: string;
  title: string;
  link: string;
  desc: string;
  type: keyof LabelTypeList;
  constructor(
    title: string,
    icon: string,
    link: string,
    desc: string,
    type: keyof LabelTypeList
  ) {
    this.title = title;
    this.icon = icon;
    this.link = link;
    this.type = type;
    this.desc = desc
  }
}
