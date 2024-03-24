# LNURL-auth Authentication Flow

Authentication flow using LNURL-auth. This flow allows users to authenticate using their Lightning Network wallets.

## Sequence Diagram for Authentication

![LNURL-auth Sequence Diagram](src/assets/sequence-diagrams/auth-sequence.png)

## Flow Description

### 1. User Requests to Log In
- The user initiates the login process through the frontend interface.

### 2. Frontend Requests LNURL-auth URL
- The frontend makes a GET request to the backend's `/auth` endpoint to retrieve the LNURL-auth URL.

### 3. Backend Generates LNURL-auth URL
- The backend generates a unique `k1` token.
- It then creates an LNURL-auth URL containing this `k1` token.

### 4. Frontend Provides LNURL-auth URL
- The backend sends the LNURL-auth URL to the frontend.

### 5. Frontend Displays LNURL-auth QR Code
- The frontend displays the LNURL-auth QR code to the user.

### 6. User Initiates QR Scan
- The user scans the QR code using their Lightning Network (LN) wallet application.

### 7. LN Wallet Sends Signed Message to Backend
- The LN wallet signs the `k1` token with the user's private linking key.
- It sends the signed message and `k1` token to the backend's `/auth/verify` endpoint.

### 8. Backend Verifies the Signature
- The backend verifies the signature against the `k1` token.
- If the signature is valid, the backend authenticates the user.

### 9. Backend Sends Authentication Status to Frontend
- The backend sends a response to the frontend indicating the authentication status.

### 10. Frontend Notifies the User
- The frontend notifies the user of the authentication result.

## Next Steps

After successful authentication, users will be able to proceed to the next step in the application flow, which will typically involve interacting with the LN wallet for transactions.
