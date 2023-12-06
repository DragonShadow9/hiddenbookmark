let rowCount = 1;

function newrow() {
    rowCount++;
    const form = document.getElementById('bookmarkForm');
    const newRow = document.createElement('div');
    newRow.id = `inputRow${rowCount}`;

    const linkInput = document.createElement('input');
    linkInput.type = 'text';
    linkInput.id = `link${rowCount}`;
    linkInput.name = `link${rowCount}`;
    linkInput.placeholder = 'Enter link';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = `name${rowCount}`;
    nameInput.name = `name${rowCount}`;
    nameInput.placeholder = 'Enter name';

    const encryptionCheckbox = document.createElement('input');
    encryptionCheckbox.type = 'checkbox';
    encryptionCheckbox.id = `encryption${rowCount}`;
    encryptionCheckbox.name = `encryption${rowCount}`;

    newRow.appendChild(linkInput);
    newRow.appendChild(nameInput);
    newRow.appendChild(encryptionCheckbox);

    form.insertBefore(newRow, form.childNodes[form.childNodes.length - 1]);
}
function makefile() {
    let htmlContent = '<!DOCTYPE html>\n<html>\n<body>\n';
    for (let i = 1; i <= rowCount; i++) {
        const link = document.getElementById(`link${i}`).value;
        const name = document.getElementById(`name${i}`).value;
        if (link && name) {
            htmlContent += `<a href="${link}">${name}</a><br>\n`;
        }
    }
    htmlContent += '</body>\n</html>';

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'BookMarkMakerOutputv1.0.html';
    link.click();
}

document.getElementById('makeFile').addEventListener('click', makefile);
document.getElementById('addRow').addEventListener('click', newrow);