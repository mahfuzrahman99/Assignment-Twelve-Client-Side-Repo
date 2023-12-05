// Import necessary dependencies
import { useQuery, useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { useTable } from "react-table";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useHistory } from "react-router-dom";


// Define the ManageRegisteredCamps component
const ManageRegisteredCampsParticipant = () => {
  // Initialize Axios instance using custom hook
  const axiosPublic = useAxiosPublic();
  const history = useHistory();


  // Fetch participants data using react-query
  const { data: participants = [], refetch } = useQuery({
    queryKey: "participants",
    queryFn: async () => {
      const res = await axiosPublic.get("/participants");
      // Add an "index" property to each participant object
      const participantsWithIndex = res.data.map((participant, index) => ({
        ...participant,
        index: index + 1,
      }));
      return participantsWithIndex;
    },
  });

  // Define columns for the table
  const columns = useMemo(
    () => [
      { Header: "No", accessor: "index" },
      { Header: "Camp Name", accessor: "camp_name" },
      { Header: "Date and Time", accessor: "scheduled_date_time" },
      { Header: "Venue", accessor: "venue" },
      { Header: "Camp Fees", accessor: "camp_fees" },
      { Header: "Payment Status", accessor: "paymentStatus" },
      { Header: "Confirmation Status", accessor: "confirmationStatus" },
      { Header: "Actions", accessor: "actions" },
    ],
    []
  );

  // Create a table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: participants });

  // Define a mutation for updating payment status
  const paymentMutation = useMutation((id) =>
    axiosPublic.patch(`/participants/${id}`, { paymentStatus: "Paid" })
  );

  // Define a mutation for updating confirmation status
  const confirmationMutation = useMutation((id) =>
    axiosPublic.patch(`/participants/${id}`, {
      confirmationStatus: "Confirmed",
    })
  );

  // Define a mutation for cancellation
  const cancelMutation = useMutation((id) =>
    axiosPublic.delete(`/participants/${id}`)
  );

  // Handle payment status update
  const handlePayment = async (id) => {
    await paymentMutation.mutateAsync(id);
    refetch(); // Refetch data after mutation
  };

  // Handle confirmation status update
  const handleConfirmation = async (id) => {
    await confirmationMutation.mutateAsync(id);
    refetch(); // Refetch data after mutation
    history.push("/participant/payment_camps_registered_camps");
  };

  // Handle cancellation
  const handleCancel = async (id) => {
    await cancelMutation.mutateAsync(id);
    refetch(); // Refetch data after mutation
  };

  // Return the JSX for rendering the component
  return (
    <div className="max-w-5xl mx-auto bg-gray-300 rounded-lg shadow-lg p-4 mt-10">
      <h2 className="text-2xl font-semibold p-2">
        Registered Camps: {participants.length}
      </h2>
      <div className="p-4 bg-white rounded-md overflow-x-auto">
        <table
          {...getTableProps()}
          style={{ borderSpacing: "0", width: "100%",  padding: "8px" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                key={headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "2px solid #ddd",
                      background: "#f2f2f2",
                      padding: "10px",
                      textAlign: "left",
                      color:
                        index === 5 // Index of "Payment Status" column
                          ? "" // Color for "Unpaid" status
                          : index === 6 // Index of "Confirmation Status" column
                          ? "" // Color for "Pending" status
                          : "inherit", // Use the default color for other columns
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  key={row.id}
                  {...row.getRowProps()}
                  style={{ borderBottom: "1px solid #ddd", background: "white", padding: "8px" }}
                >
                  {row.cells.map((cell, index) => (
                    <td
                      key={cell.id}
                      {...cell.getCellProps()}
                      className={
                        index === 0 // Index of "No" column
                          ? "text-[#91283d] font-semibold"
                          : index === 5 // Index of "Payment Status" column
                          ? "text-[#91283d] font-semibold"
                          : index === 6 // Index of "Confirmation Status" column
                          ? "text-[#91283d] font-semibold"
                          : ""
                      }
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                  <td>
                    {row.original.paymentStatus === "Unpaid" && (
                      <button onClick={() => handlePayment(row.original._id)}>
                        Pay
                      </button>
                    )}
                    {row.original.confirmationStatus === "Pending" && (
                      <button
                        onClick={() => handleConfirmation(row.original._id)}
                      >
                        Confirm
                      </button>
                    )}
                    {row.original.paymentStatus === "Paid" && (
                      <button onClick={() => handleCancel(row.original._id)}>
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export the ManageRegisteredCamps component as the default export
export default ManageRegisteredCampsParticipant;
