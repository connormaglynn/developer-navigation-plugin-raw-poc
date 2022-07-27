const createNewButton = (
  baseUrl: string,
  name: string,
  organization: string,
  project: string,
  className: string
) => {
  const button = document.createElement('div')
  button.innerHTML = `<a href='${baseUrl}/${organization}/${project}'>${name}</a>`
  button.classList.add(className)
  button.classList.add('button')
  return button
}

const currentUrl = window.location.href
const resourceArray = currentUrl.split('/')
const organization = resourceArray[resourceArray.length - 2] || ''
const project = resourceArray[resourceArray.length - 1] || ''

const wrapper = document.createElement('div')
wrapper.classList.add('navigation-bar')

wrapper.append(
  createNewButton(
    'https://github.com',
    'Github',
    organization,
    project,
    'github'
  )
)
wrapper.append(
  createNewButton(
    'https://app.circleci.com/pipelines/github',
    'CircleCI',
    organization,
    project,
    'circleci'
  )
)
document.body.prepend(wrapper)
