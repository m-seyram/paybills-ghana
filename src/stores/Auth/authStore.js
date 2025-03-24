import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null); // Stores the logged-in user
  const isAuthenticated = ref(false);

  // Dummy user database
  const users = ref([
    { id: 1, email: "Johndoe@gmail.com", password: "password123" },
    { id: 2, email: "user@example.com", password: "123456" },
  ]);

  // Register function
  async function register(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulating API delay
        const success = Math.random() > 0.2; // Simulate success (80% chance)
        if (success) {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: "Email already in use" });
        }
      }, 500);
    });
  }

  // Login function
  function login(email, password) {
    const foundUser = users.value.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      user.value = foundUser;
      isAuthenticated.value = true;
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  }

  // Logout function
  function logout() {
    user.value = null;
    isAuthenticated.value = false;
  }

  return { user, isAuthenticated, users, register, login, logout };
});
