let u;
if (location.href.split("challenge/")[1].includes('single-player')) {
	u = location.href.split("challenge/")[1].split('*single')[0]
} else {
	u = location.href.split("challenge/")[1]
}
let resaults;
fetch("https://kahoot.it/rest/challenges/" + location.href.split("challenge/")[1] + "/answers", {
		"headers": {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"ChromeOS\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-kahoot-tracking": "platform/Web"
		},
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": null,
		"method": "GET",
		"mode": "cors",
		"credentials": "include"
	})
	.then(response => response.json())
	.then(function(r) {
		for (let i = 0; i < r.challenge.kahoot.questions.length; i++) {
			for (let o = 0; o < r.challenge.kahoot.questions[i].choices.length; o++) {
				if (r.challenge.kahoot.questions[i].choices[o].correct === true) {
					console.log(r.challenge.kahoot.questions[i].choices[o].answer + ' ' + r.challenge.kahoot.questions[i].question.replaceAll('<b>', '').replaceAll('</b>', ''))
					if (document.querySelectorAll('span')[0].outerText === r.challenge.kahoot.questions[i].question.replaceAll('<b>', '').replaceAll('</b>', '')) {

						if (document.querySelectorAll('[data-functional-selector="answer-0"]')[0].textContent.replaceAll('Icon', '') === r.challenge.kahoot.questions[i].choices[o].answer.replaceAll('<b>', '').replaceAll('</b>', '')) {
							document.querySelectorAll('[data-functional-selector="answer-0"]')[0].click()
						}
						if (document.querySelectorAll('[data-functional-selector="answer-1"]')[0].textContent.replaceAll('Icon', '') === r.challenge.kahoot.questions[i].choices[o].answer.replaceAll('<b>', '').replaceAll('</b>', '')) {
							document.querySelectorAll('[data-functional-selector="answer-1"]')[0].click()
						}
						if (document.querySelectorAll('[data-functional-selector="answer-2"]')[0].textContent.replaceAll('Icon', '') === r.challenge.kahoot.questions[i].choices[o].answer.replaceAll('<b>', '').replaceAll('</b>', '')) {
							document.querySelectorAll('[data-functional-selector="answer-2"]')[0].click()
						}
						if (document.querySelectorAll('[data-functional-selector="answer-3"]')[0].textContent.replaceAll('Icon', '') === r.challenge.kahoot.questions[i].choices[o].answer.replaceAll('<b>', '').replaceAll('</b>', '')) {
							document.querySelectorAll('[data-functional-selector="answer-3"]')[0].click()
						}

						alert('The Answer Is:  ' + r.challenge.kahoot.questions[i].choices[o].answer.replaceAll('<b>', '').replaceAll('</b>', ''))
					}

				}
			}
		}
	})
