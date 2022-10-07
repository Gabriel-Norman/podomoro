// Example function to easily create html elements
export const htmlBlockGetter = function (data) {
  const html = `
      <div class="block">
        <h2 class="block__title">${data.title}</h2>
        <p class="block__text">${data.text}</p>
      </div>
    `;

  return html.replace(/^\s+|\s+$/gm, "");
};
