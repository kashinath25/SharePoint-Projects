import * as React from "react";
import { ISpLearningAreaProps } from "./ISpLearningAreaProps";
import { useState } from "react";
import { sp } from "@pnp/sp";

const FetchListComponent: React.FC<ISpLearningAreaProps> = () => {
  const [listItems, setListItems] = useState<any[]>([]);

  // Fetch SharePoint list items
  const fetchListItems = async () => {
    try {
      const items = await sp.web.lists
        .getByTitle("YourListName")
        .items.select("Title", "ID")
        .get();
      setListItems(items);
    } catch (error) {
      console.error("Error fetching list items", error);
    }
  };

  // useEffect hook to trigger fetching list items on component mount
  React.useEffect(() => {
    fetchListItems();
  }, []);

  return (
    <div>
      <h3>SharePoint List Items:</h3>
      <ul>
        {listItems.map((item) => (
          <li key={item.ID}>{item.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchListComponent;
