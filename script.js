/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
function main() {
  $("#js-shopping-list-form").on("submit", function (event) {
    event.preventDefault();
    const add = $("#shopping-list-entry").val();
    console.log(add);
    $(".shopping-list").prepend(
      $(`
        <li>
            <span class="shopping-item">${add}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
      </li>
    `)
    );
  });
  //check
  $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
    $(this)
      .parent()
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  //delete
  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    $(this).closest("li").remove();
  });
}
$(main);
