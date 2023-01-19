import { createElement, ReactElement } from "react";

import { GroupedListViewContainerProps } from "../../typings/GroupedListViewProps";

export default function EmptyMessage(props: GroupedListViewContainerProps): ReactElement {
    if (!props.emptyMessage) {
        return <div></div>;
    } else {
        return (
            // @ts-ignore
            <div name={props.name} style={props.style} className={"glv mx-listview " + props.class}>
                <div className="glv_empty-message">{props.emptyMessage}</div>
            </div>
        );
    }
}
