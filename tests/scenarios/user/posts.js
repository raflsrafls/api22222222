import { createUser, deleteUser, getUser} from '../../steps/customer/posts.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
    console.log('before hook')
})

after(async () => {
    await generateTestData()
    console.log('after hook')
})


it('Create user Post', () => {
    describe(`CRUD User`, () => {
        createUser()
        getUser()
        deleteUser()
    })
})
