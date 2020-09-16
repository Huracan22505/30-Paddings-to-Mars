(() => {		const menuBtnRef = document.querySelector("[text-hidden-button]");
	const mobileMenuRef = document.querySelector("[text-hidden]");
  
	menuBtnRef.addEventListener("click", () => {
	  const expanded =
		menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
	  menuBtnRef.classList.toggle("is-open");
	  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
	  mobileMenuRef.classList.toggle("is-open");
	});
  })();