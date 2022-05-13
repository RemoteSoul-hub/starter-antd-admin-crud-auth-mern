import React from "react";

import CrudModule from "@/modules/CrudModule";
import EventForm from "@/forms/EventForm";

function Event() {
  const entity = "event";
  const searchConfig = {
    displayLabels: ["title"],
    searchFields: "title",
    outputValue: "_id",
  };

  const panelTitle = "Event Panel";
  const dataTableTitle = "Events Lists";
  const entityDisplayLabels = ["title"];

  const readColumns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "User",
      dataIndex: "assigned",
    },
    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
      title: "Tags",
      dataIndex: "tags",
    },
  ];
  const dataTableColumns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "User",
      dataIndex: "assigned",
    },
    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
      title: "Tags",
      dataIndex: "tags",
    },
  ];

  const ADD_NEW_ENTITY = "Add new Event";
  const DATATABLE_TITLE = "events List";
  const ENTITY_NAME = "event";
  const CREATE_ENTITY = "Create event";
  const UPDATE_ENTITY = "Update event";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<EventForm />}
      updateForm={<EventForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Event;
