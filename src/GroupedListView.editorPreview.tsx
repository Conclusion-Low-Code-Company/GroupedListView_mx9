import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { GroupedListViewPreviewProps } from "../typings/GroupedListViewProps";

export function preview({ sampleText }: GroupedListViewPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/GroupedListView.css");
}
