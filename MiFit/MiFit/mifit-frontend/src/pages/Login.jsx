import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ()=> {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formRef.current;

    // ✅ DEMO: si hay algo escrito, "loguea"
    if (!email.value || !password.value) {
      alert("Rellena email y password");
      return;
    }

    // Guarda token (demo)
    localStorage.setItem("token", "token-demo-123");
    navigate("/", { replace: true }); // vuelve a home
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Sesión cerrada");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: 380,
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 20,
          background: "white",
        }}
      >
        <h2 style={{ marginBottom: 12 }}>Login</h2>

        <form ref={formRef} onSubmit={handleLogin} style={{ display: "grid", gap: 10 }}>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Entrar</button>
        </form>

        <hr style={{ margin: "16px 0" }} />

        <button type="button" onClick={handleLogout}>
          Cerrar sesión (borra token)
        </button>

        <p style={{ marginTop: 12, fontSize: 12, opacity: 0.8 }}>
          * Esto es login demo: guarda un token falso en localStorage para probar rutas.
        </p>
      </div>
    </div>
  );
}
