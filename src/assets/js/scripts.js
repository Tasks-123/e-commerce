// let originalHeights = {};

// function toggleVisibility(event) {
//     const item = event.currentTarget;
//     const content = item.nextElementSibling;
//     const container = document.querySelector('.accordion-container');
//     const allItems = document.querySelectorAll('.accordion-item');
//     const allContents = document.querySelectorAll('.accordion-content');

//     if (!content.classList.contains('hidden')) {
//         // If the clicked item is already open, just close it
//         content.classList.add('hidden');
//         content.classList.remove('raised');
//         item.querySelector('img').classList.remove('rotate-180');
//         container.style.transform = 'translateY(0)';
//     } else {
//         // Close all other open items and open the clicked item
//         allItems.forEach((el) => {
//             if (el !== item) {
//                 el.nextElementSibling.classList.add('hidden');
//                 el.nextElementSibling.classList.remove('raised');
//                 el.querySelector('img').classList.remove('rotate-180');
//             }
//         });
//         content.classList.remove('hidden');
//         content.classList.add('raised');
//         item.querySelector('img').classList.add('rotate-180');
//         const height = content.clientHeight;
//         originalHeights[item.dataset.index] = height;
//         container.style.transform = `translateY(-${height}px)`; // Translate only the clicked content
//     }
// }

// function toggleVisibility(event) {
//     const item = event.currentTarget;
//     const content = item.nextElementSibling;
//     const container = document.querySelector('.accordion-container');
//     const allItems = document.querySelectorAll('.accordion-item');
//     const allContents = document.querySelectorAll('.accordion-content');

//     if (!content.classList.contains('hidden')) {
//         // If the clicked item is already open, just close it
//         content.classList.add('hidden');
//         content.classList.remove('raised');
//         item.querySelector('img').classList.remove('rotate-180');
//         container.style.transform = 'translateY(0)';
//     } else {
//         // Close all other open items and open the clicked item
//         allItems.forEach((el) => {
//             if (el !== item) {
//                 el.nextElementSibling.classList.add('hidden');
//                 el.nextElementSibling.classList.remove('raised');
//                 el.querySelector('img').classList.remove('-rotate-180');
//             }
//         });
//         content.classList.remove('hidden');
//         content.classList.add('raised');
//         item.querySelector('img').classList.add('-rotate-180');
//         const height = content.clientHeight;
//         originalHeights[item.dataset.index] = height;
//         container.style.transform = `translateY(-${height}px)`; // Translate only the clicked content
//     }
// }


function toggleVisibility(event) {
    const item = event.currentTarget;
    const content = item.nextElementSibling;
    const container = document.querySelector('.accordion-container');
    const allItems = document.querySelectorAll('.accordion-item');
    const allContents = document.querySelectorAll('.accordion-content');

    if (!content.classList.contains('hidden')) {
        // If the clicked item is already open, just close it
        content.classList.add('hidden');
        content.classList.remove('raised');
        item.querySelector('img').style.transform = 'rotate(-90deg)';
        container.style.transform = 'translateY(0)';
    } else {
        // Close all other open items and open the clicked item
        allItems.forEach((el) => {
            if (el !== item) {
                el.nextElementSibling.classList.add('hidden');
                el.nextElementSibling.classList.remove('raised');
                el.querySelector('img').style.transform = 'rotate(-90deg)';
            }
        });
        content.classList.remove('hidden');
        content.classList.add('raised');
        item.querySelector('img').style.transform = 'rotate(0deg)';
        const height = content.clientHeight;
        originalHeights[item.dataset.index] = height;
        container.style.transform = `translateY(-${height}px)`; // Translate only the clicked content
    }
}
