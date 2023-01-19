import { createElement, ReactElement } from "react";

export default function AlertMessage(): ReactElement {
    return <div className={"alert alert-danger"}>{"GroupedListView: Input list undefined."}</div>;
}
