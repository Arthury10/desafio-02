/*animação scrolls*/
function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.75

		function animaScroll() {
			sections.forEach(section => {
				section.classList.add('desativo')
				const sectionTop = section.getBoundingClientRect().top
				const isSectionVisible = sectionTop - windowMetade < 0
				if (isSectionVisible) {
					section.classList.add('ativo')
					section.classList.add('fade-in-fwd')
				} else {
					section.classList.remove('ativo')
					section.classList.remove('fade-in-fwd')
				}
			})
		}

		animaScroll()

		window.addEventListener('scroll', animaScroll)
	}
}

initAnimacaoScroll()

/*Open Modal Tenis*/

function modalTenisOpen() {
	const openmodalTenis = document.querySelector('.tenis-modal')
	const modalTenis = document.querySelector('.modal-tenis')
	const btnClose = document.querySelector('.btnClose')

	function openModalTenis() {
		modalTenis.classList.add('show')
		modalTenis.classList.add('fade-in-fwd')
		modalTenis.classList.remove('fade-out-bck')
	}

	function closeModalTenis() {
		modalTenis.classList.remove('show')
		modalTenis.classList.remove('fade-in-fwd')
		modalTenis.classList.add('fade-out-bck')
	}

	openmodalTenis.addEventListener('click', openModalTenis)
	btnClose.addEventListener('click', closeModalTenis)
}

modalTenisOpen()
