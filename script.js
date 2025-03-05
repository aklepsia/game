const avatarsContainer = document.querySelector(".avatars-wrapper");

const avatarsData = Array(6).fill(true).concat(Array(6).fill(false));

avatarsData.forEach((hasAvatar) => {
  const characterItem = document.createElement("div");
  characterItem.classList.add("character-item");

  characterItem.innerHTML = `<img src="/images/avatar_friends_background.png" class="avatar-bg" />`;

  if (hasAvatar) {
    characterItem.innerHTML += `<img src="/images/avatar_friends.png" class="avatar-icon" />`;
  }

  avatarsContainer.appendChild(characterItem);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".avatars-container");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  const avatarWidth = document.querySelector(".character-item").offsetWidth + 8;
  let scrollPosition = 0;

  rightBtn.addEventListener("click", () => {
    if (scrollPosition + container.clientWidth < container.scrollWidth) {
      scrollPosition += avatarWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  });

  leftBtn.addEventListener("click", () => {
    if (scrollPosition > 0) {
      scrollPosition -= avatarWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const character = document.querySelector(".character");
  const univerButton = document.querySelector(".btn-univer");

  const path = [
    { x: 343, y: 470 },
    { x: 269, y: 513 },
    { x: 182, y: 532 },
    { x: 103, y: 504 },
    { x: 117, y: 440 },
    { x: 135, y: 384 },
    { x: 207, y: 347 },
    { x: 169, y: 276 },
    { x: 131, y: 223 },
    { x: 195, y: 193 },
    { x: 246, y: 239 },
  ];

  let currentIndex = 0;

  function moveCharacter(x, y) {
    const characterHeight = character.clientHeight;

    character.style.left = `${x - 3}px`;
    character.style.top = `${y - characterHeight + 6}px`;
  }

  univerButton.addEventListener("click", function () {
    if (currentIndex < path.length) {
      const { x, y } = path[currentIndex];
      moveCharacter(x, y);
      currentIndex++;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const ratingWindow = document.querySelector(".rating-window");
  const ratingWrapper = document.querySelector(".rating-window-wrapper");
  const ratingButton = document.querySelector(".btn-rating");
  const closeButton = document.querySelector(".close-btn");

  ratingButton.addEventListener("click", function () {
    ratingWrapper.classList.add("active");
    ratingWindow.classList.add("active");
  });

  function closeRatingWindow() {
    ratingWindow.classList.remove("active");
    ratingWrapper.classList.remove("active");
  }

  closeButton.addEventListener("click", closeRatingWindow);

  ratingWrapper.addEventListener("click", function (event) {
    if (!ratingWindow.contains(event.target)) {
      closeRatingWindow();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  data.rating.sort((a, b) => b.points - a.points);

  const rowsWrapper = document.querySelector(".rows-wrapper");
  rowsWrapper.innerHTML = "";

  const friendIds = new Set(data.friends.map((friend) => friend.id));

  data.rating.forEach((player, index) => {
    const row = document.createElement("div");
    row.classList.add("text-row-wrapper");

    if (friendIds.has(player.id)) {
      row.classList.add("friend");
    }

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");

    const place = document.createElement("h3");
    place.textContent = index + 1;
    place.style.marginRight = "20px";
    place.style.width = "10px";
    place.style.textAlign = "center";

    const avatarWrapper = document.createElement("div");
    avatarWrapper.classList.add("avatar-rating");

    const avatarImg = document.createElement("img");
    avatarImg.classList.add("avatar_rating_mini");
    avatarImg.src = player.img;
    avatarImg.alt = "avatar";

    const playerName = document.createElement("h3");
    playerName.textContent = `${player.name} ${player.lastName}`;

    avatarWrapper.appendChild(avatarImg);
    avatarWrapper.appendChild(playerName);

    textWrapper.appendChild(place);
    textWrapper.appendChild(avatarWrapper);

    const points = document.createElement("h3");
    points.textContent = player.points;

    row.appendChild(textWrapper);
    row.appendChild(points);

    rowsWrapper.appendChild(row);
  });
});
