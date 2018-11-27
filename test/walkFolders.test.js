const walkFolders = require('../index')
describe('main', () => {

  test('walkFolders - test 0 recursive', () => {
    let count = 0
    for (const fileInfo of walkFolders('/', 0)) {
      if ('error' in fileInfo) {
        console.error(`Error: ${fileInfo.rootDir} - ${fileInfo.error}`)
        continue
      }
      // we only want folders
      if (!fileInfo.isDir) {
        continue
      }
      // folder count
      ++count
    }
    expect(count).toBeGreaterThan(0)
  })

  test('walkFolders - test 1 recursive', () => {
    let count = 0
    for (const fileInfo of walkFolders('/', 1)) {
      if ('error' in fileInfo) {
        console.error(`Error: ${fileInfo.rootDir} - ${fileInfo.error}`)
        continue
      }
      // we only want folders
      if (!fileInfo.isDir) {
        continue
      }
      // folder count
      ++count
    }
    expect(count).toBeGreaterThan(0)
  })

  test('walkFolders - test unknown folder', () => {
    let count = 0
    for (const fileInfo of walkFolders('/someUnknownFolder', 0)) {
      if ('error' in fileInfo) {
        console.error(`Error: ${fileInfo.rootDir} - ${fileInfo.error}`)
        continue
      }
      // we only want folders
      if (!fileInfo.isDir) {
        continue
      }
      // folder count
      ++count
    }
    expect(count).toBe(0)
  })

})