import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { GroupedListViewContainerProps } from "../typings/GroupedListViewProps";

import "./ui/GroupedListView.css";

export function GroupedListView({ sampleText }: GroupedListViewContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
