import { createElement, ReactElement, Fragment } from "react";

import GroupTitle from "./GroupTitle";
import ListItem from "./ListItem";

import { GroupedListViewContainerProps } from "../../typings/GroupedListViewProps";

export default function GroupedList(props: GroupedListViewContainerProps): ReactElement {
    let lastKnownGroupId = "";

    return (
        <div style={props.style} className={"glv mx-listview " + props.class}>
            <ul className="glv__list">
                {props.inputList.items!.map(item => {
                    // if (props.groupId(item).value !== lastKnownGroupId)
                    if (props.groupId.get(item).value !== lastKnownGroupId) {
                        lastKnownGroupId = props.groupId.get(item).value!;

                        return (
                            <Fragment>
                                <GroupTitle
                                    groupTitle={props.groupTitle}
                                    item={item}
                                    stickyGroupHeaders={props.stickyGroupHeaders}
                                    key={"gt" + item.id}
                                />
                                <ListItem
                                    widget={props.widget}
                                    item={item}
                                    listItemClick={props.listItemClick}
                                    key={item.id}
                                />
                            </Fragment>
                        );
                    }
                    return (
                        <ListItem widget={props.widget} item={item} listItemClick={props.listItemClick} key={item.id} />
                    );
                })}
            </ul>
        </div>
    );
}
