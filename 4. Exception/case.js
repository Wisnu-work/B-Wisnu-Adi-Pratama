function divideNumbers(num1, num2) {
    try {
        // Cek apakah kedua input telah terisi
        if (num1 === "" || num2 === "") {
            throw new Error("Both fields must be filled.");
        }

        // Pastikan input dikonversi menjadi angka
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Cek apakah input adalah angka
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Both inputs must be numbers.");
        }
        
        // Cek apakah num2 adalah 0
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        
        // Hitung hasil bagi
        let result = num1 / num2;
        
        // Tampilkan hasil di halaman HTML
        document.getElementById("result").textContent = `The result of dividing ${num1} by ${num2} is: ${result}`;
    } catch (error) {
        // Tampilkan pesan error di halaman HTML
        document.getElementById("result").textContent = "An error occurred: " + error.message;
    }
}

function calculateDivision() {
    // Ambil nilai dari input
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    // Panggil fungsi divideNumbers untuk menghitung hasil
    divideNumbers(num1, num2);
}
