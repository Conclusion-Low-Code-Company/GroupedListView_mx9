import { ReactElement, createElement } from "react";
import AlertMessage from "./components/AlertMessage";
import EmptyMessage from "./components/EmptyMessage";
import GroupedList from "./components/GroupedList";
import { GroupedListViewContainerProps } from "../typings/GroupedListViewProps";

import "./ui/GroupedListView.css";

export function GroupedListView(props: GroupedListViewContainerProps): ReactElement {
    // if there is no list input, return alert
    if (!props.inputList.items) {
        return <AlertMessage />;
    }

    // if the list is empty, show (custom) empty message
    if (props.inputList.items.length < 1) {
        return <EmptyMessage {...props} />;
    }
    // show the grouped list
    return <GroupedList {...props} />;
}
