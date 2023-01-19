import { createElement, ReactElement } from "react";
import { ListActionValue, ListWidgetValue, ObjectItem } from "mendix";

export interface ListItemProps {
    widget?: ListWidgetValue;
    item?: ObjectItem;
    listItemClick?: ListActionValue;
}

export default function ListItem({ widget, item, listItemClick }: ListItemProps): ReactElement {
    const clickHandler = () => {
        const actionOnObject = listItemClick!.get(item!);
        if (actionOnObject.canExecute && !actionOnObject.isExecuting) {
            actionOnObject.execute();
        }
    };
    return (
        <li className={`glv__listItem${listItemClick ? " link" : ""}`} onClick={clickHandler}>
            {widget!.get(item!)}
        </li>
    );
}
