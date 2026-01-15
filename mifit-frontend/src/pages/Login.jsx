import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ()=> {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formRef.current;

    if (!email.value || !password.value) {
      alert("Rellena email y password");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/", { replace: true });
      } else {
        alert(data.message || 'Error en login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
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
