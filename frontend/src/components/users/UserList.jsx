export default function UserList({ users, roles, onEdit, onDelete }) {
  const nomRole = (roleId) => roles.find((r) => r.id === roleId)?.name || "-";

  if (users.length === 0) {
    return <p>Aucun utilisateur.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Rôle</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.prenom}</td>
              <td>{u.nom}</td>
              <td>{u.email}</td>
              <td>{u.telephone}</td>
              <td>{nomRole(u.role_id)}</td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-outline-dark me-2"
                  onClick={() => onEdit(u)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(u)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
