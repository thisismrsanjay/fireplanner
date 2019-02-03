import React from "react";

export default function ProjectSummary({project}) {
  return (
    <div className="card  border-secondary shadow bg-white rounded mb-3">
      <div className="card-header">{project.title}</div>

      <div className="card-body">
        <span className="card-title" />
        <p>Posted by the Net Ninja</p>
        <p className="card-text">3rd September, 2am</p>
      </div>
    </div>
  );
}
