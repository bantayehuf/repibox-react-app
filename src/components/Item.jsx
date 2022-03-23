import React from "react";
import { Card } from "primereact/card";

export default function Item({ post }) {
  const header = <img alt={post.post_title} src={post.post_img_url_src} />;

  const footer = (
    <a href={post.post_url} target={"_blank"} rel="noopener noreferrer">
      View receipe{" "}
      <i className="pi pi-arrow-right" style={{ fontSize: "0.8em" }}></i>
    </a>
  );

  const description = (
    <span className="item-description">{post.post_description}</span>
  );
  return (
    <>
      <div className="col-12 md:col-6 lg:col-4 xl:col-3">
        <Card
          title={post.post_title}
          subTitle={description}
          footer={footer}
          header={header}
        />
      </div>
    </>
  );
}
