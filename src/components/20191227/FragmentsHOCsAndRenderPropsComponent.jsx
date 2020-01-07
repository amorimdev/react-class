import React from "react";
import DataSource from "./DataSource";

const UserTableColumns = props => (
  <React.Fragment>
    <td>{props.user.id}</td>
    <td>{props.user.first_name}</td>
    <td>{props.user.last_name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.gender}</td>
  </React.Fragment>
);

const UserTableRow = props => {
  return (
    <React.Fragment>
      <tr>{props.render(props)}</tr>
    </React.Fragment>
  );
};

const UserList = props => {
  return (
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </thead>
        <tbody>
          {props.data &&
            props.data.map(user => (
              <UserTableRow
                user={user}
                render={data => <UserTableColumns user={data.user} />}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const User = props => {
  return (
    <React.Fragment>
      <h2>User Details:</h2>
      {props.data && (
        <React.Fragment>
          <p>
            <strong>ID: </strong>
            <span>{props.data.id}</span>
          </p>
          <p>
            <strong>First Name: </strong>
            <span>{props.data.first_name}</span>
          </p>
          <p>
            <strong>Last Name: </strong>
            <span>{props.data.last_name}</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span>{props.data.email}</span>
          </p>
          <p>
            <strong>Gender: </strong>
            <span>{props.data.gender}</span>
          </p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const UserListWithDataSource = withDataSource(UserList, DataSource =>
  DataSource.getUsers()
);

const UserWithDataSource = withDataSource(User, (DataSource, props) =>
  DataSource.getUserById(props.id)
);

function withDataSource(WrappedComponent, selectData) {
  return props => {
    const data = selectData(DataSource, props);

    return <WrappedComponent data={data} />;
  };
}

export default () => {
  return (
    <React.Fragment>
      <h1>Fragments, HOC's and Render Props</h1>
      <UserListWithDataSource />
      <UserWithDataSource id={1} />
    </React.Fragment>
  );
};
