const lables = document.querySelectorAll(".form-control label");

lables.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="tansition-delay: ${idx *50}ms;"> ${letter}</span>`).join('')
});