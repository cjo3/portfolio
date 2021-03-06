import path from 'path'

export const switchPathPageName = appPath => {
  switch (appPath) {
    case undefined:
    case '':
    case '/':
      return 'home'
    case '/converter':
    case '/converter/':
      return 'home-converter'
    case '/converter/guide':
    case '/converter/guide/':
      return 'home-converter-guide'
    default:
      return 'error'
  }
}

export const splitEnvVarList = envVar => envVar.split(',')

export const parseAppPage = (uri, appsList) => {
  console.log('LOG XXX'.yellow, uri, appsList)
  let result = {}

  const parsedUri = path.parse(uri)

  if (uri.includes('apps/')) {
    const match = uri.match(
      /(?<appPrefix>\/?apps\/)(?<appName>[a-z\-]+)(?<appPath>.*)$/i
    )

    result.app = match?.groups.appName

    result.page = switchPathPageName(match?.groups.appPath)

    return result
  }

  result.app = appsList[0]

  if (parsedUri.ext.length) {
    result.fileName = parsedUri.base

    result.filePath = `${parsedUri.dir}/`.replace(/\/*/i, '/')
    console.log('LOG XXX'.green, result)
  } else {
    result.filePath = `${parsedUri.dir}/${parsedUri.base}/`.replace(/\/*/, '/')
    console.log('LOG XXX'.blue, parsedUri, result)
  }

  return result
}
