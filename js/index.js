const loadContentFromHtmlFile = (url) => {

	// 1. Put up some type of UI to inform the user

	// 2. Fetch the file specified as url
	fetch(url)
		.then((response) => {
			// Converts the file to text
			return response.text()
		})
		.then((html) => {
			// 3. Parse the document into text/html
			let parser = new DOMParser()
			let newDocument = parser.parseFromString(html, 'text/html')

			// 4. Pull out the new #content
			let $oldContent = document.querySelector('#content')
			let $newContent = newDocument.querySelector('#content')

			// 5. Replace the old content with the new content
			$oldContent.innerHTML += $newContent.innerHTML
			
			// 6. Clear the UI loading/etc
			document.querySelector('section:last-child').classList.add('loaded')


		})

}



// loadContentFromHtmlFile('contact.html')
