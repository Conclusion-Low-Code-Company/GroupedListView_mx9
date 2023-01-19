import { ReactElement, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
// import { GroupedListViewPreviewProps } from "../typings/GroupedListViewProps";

export function preview(): ReactElement {
    return <div>Grouped List View</div>;
}

export function getPreviewCss(): string {
    return require("./ui/GroupedListView.css");
}
