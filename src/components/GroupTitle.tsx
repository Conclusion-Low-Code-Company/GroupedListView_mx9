import { createElement, ReactElement } from "react";
import { ListWidgetValue, ObjectItem } from "mendix";

export interface GroupTitleProps {
    groupTitle?: ListWidgetValue;
    item?: ObjectItem;
    stickyGroupHeaders?: boolean;
}

export default function GroupTitle({ groupTitle, item, stickyGroupHeaders }: GroupTitleProps): ReactElement {
    return <li className={`glv__listHeader${stickyGroupHeaders ? " sticky" : ""}`}>{groupTitle!.get(item!)}</li>;
}
