import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody } from '../../utils/requestBodyGenerator/customer.js'
import { config } from '../../../config.js'

export async function createUser() {
    it('Create user', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/users', requestBody, true, 
            {
                statusCode : 201,
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status},
                                    {path: 'email', value: requestBody.email}
                                ],
                executionVariables: [
                                        {path: 'id', name: 'userId'}, 
                                    ]
            }
        )
    })
}

export async function deleteUser() {
    it('Delete user', async function () {
        await request(this, 'DELETE', `/users/${global.executionVariables['userId']}`, undefined, true, 
            {
                statusCode : 204
            }
        )
    })
}


export async function getUser() {
    it('Get user', async function () {
        const userId = global.executionVariables['userId']
        await request(this, 'GET', `/users/${userId}`, undefined, true, 
            {
                statusCode : 200,
                expectedFields: ['email'], 
                expectedValues: [
                                    {path: 'name', value: config[global.env].username},
                                    {path: 'gender', value: config[global.env].gender},
                                    {path: 'status', value: config[global.env].status},
                                    {path: 'id', value: userId},
                                    {path: 'email', value: global.executionVariables['userEmail']}
                                ]
            }
        )
    })
}

