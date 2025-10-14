import jwt from 'jsonwebtoken';

console.log('--- Starting JWT test ---');

try {
    const payload = {
        user: {
            id: 1,
            role: 'user'
        }
    };

    const secret = 'this_is_a_super_secret_key_for_vytal_ai_project_12345';
    
    console.log('Payload and secret are ready. Attempting to sign...');

    const token = jwt.sign(
        payload,
        secret,
        { expiresIn: '5h' }
    );

    console.log('--- SUCCESS! Token was created: ---');
    console.log(token);

} catch (err) {
    console.log('--- ERROR WAS CAUGHT ---');
    console.error(err);
}

console.log('--- Test finished ---');