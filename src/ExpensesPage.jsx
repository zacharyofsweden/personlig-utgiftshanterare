import React, { useState } from "react";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 120, category: "Mat", date: "2025-06-01", description: "Lunch på café" },
    { id: 2, amount: 50, category: "Transport", date: "2025-06-02", description: "Bussbiljett" },
  ]);
  const [editingExpense, setEditingExpense] = useState(null);
  const categories = ["Mat", "Transport", "Nöje", "Övrigt"];

  const openEditModal = (expense) => {
    setEditingExpense(expense);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
  };

  const closeModal = () => {
    setEditingExpense(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mina Utgifter</h1>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id} className="flex justify-between items-center mb-2 border-b pb-2">
            <div>
              <div className="font-medium">{exp.category}</div>
              <div>
                {exp.date} – {exp.description} – {exp.amount} kr
              </div>
            </div>
            <button
              onClick={() => openEditModal(exp)}
              className="text-blue-500 hover:underline"
            >
              Redigera
            </button>
          </li>
        ))}
      </ul>
      {editingExpense && (
        <div>
          {/* Här kommer EditExpenseModal senare */}
        </div>
      )}
    </div>
  );
}
