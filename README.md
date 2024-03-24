# LN Service Integration Guide

This guide details the flows for LNURL-auth and LNURL-withdraw, enabling users to authenticate with their Lightning Network wallets and withdraw satoshis from our service.

## Table of Contents
- [LNURL-auth Authentication Flow](#lnurl-auth-authentication-flow)
- [LNURL-withdraw Flow](#lnurl-withdraw-flow)

---

## LNURL-auth Authentication Flow

Authentication flow using LNURL-auth. This flow allows users to authenticate using their Lightning Network wallets.

### Sequence Diagram for Authentication

![LNURL-auth Sequence Diagram](src/assets/sequence-diagrams/auth-sequence.png)

### Flow Description

#### 1. User Requests to Log In
- The user initiates the login process through the frontend interface.

#### 2. Frontend Requests LNURL-auth URL
- The frontend makes a GET request to the backend's `/auth` endpoint to retrieve the LNURL-auth URL.

#### 3. Backend Generates LNURL-auth URL
- The backend generates a unique `k1` token.
- It then creates an LNURL-auth URL containing this `k1` token.

#### 4. Frontend Provides LNURL-auth URL
- The backend sends the LNURL-auth URL to the frontend.

#### 5. Frontend Displays LNURL-auth QR Code
- The frontend displays the LNURL-auth QR code to the user.

#### 6. User Initiates QR Scan
- The user scans the QR code using their Lightning Network (LN) wallet application.

#### 7. LN Wallet Sends Signed Message to Backend
- The LN wallet signs the `k1` token with the user's private linking key.
- It sends the signed message and `k1` token to the backend's `/auth/verify` endpoint.

#### 8. Backend Verifies the Signature
- The backend verifies the signature against the `k1` token.
- If the signature is valid, the backend authenticates the user.

#### 9. Backend Sends Authentication Status to Frontend
- The backend sends a response to the frontend indicating the authentication status.

#### 10. Frontend Notifies the User
- The frontend notifies the user of the authentication result.

---

## LNURL-withdraw Flow

This section describes the sequence of events for a user to withdraw satoshis using LNURL-withdraw.

### Sequence Diagram for Withdrawal

![LNURL-withdraw Sequence Diagram](src/assets/sequence-diagrams/withdraw-sequence.png)

### Flow Description

#### 1. User Requests Withdrawal
- The user navigates to the withdrawal section and requests to withdraw satoshis.

#### 2. Frontend Requests Withdrawal URL
- The frontend makes a GET request to the backend's `/withdraw/request` endpoint for an LNURL-withdraw URL.

#### 3. Backend Generates LNURL-withdraw URL
- The backend generates a unique `k1` token and an LNURL-withdraw URL containing the `k1` token and withdrawal details.

#### 4. Frontend Provides LNURL-withdraw URL
- The backend sends the LNURL-withdraw URL to the frontend.

#### 5. Frontend Displays LNURL-withdraw QR Code
- The frontend displays the LNURL-withdraw QR code for the user to scan.

#### 6. User Initiates QR Scan
- The user scans the QR code using their LN wallet, which is configured to understand and act on LNURL-withdraw QR codes.

#### 7. LN Wallet Sends Callback Request
- The LN wallet sends a callback request to the backend's `/withdraw/callback` endpoint with the `k1` token and a Lightning invoice.

#### 8. Backend Requests Invoice Payment
- The backend validates the `k1` token and requests the LN node to pay the provided invoice.

#### 9. LN Node Confirms Payment Result
- The LN node processes the invoice payment and confirms the result to the backend.

#### 10. Backend Sends Payment Result
- The backend communicates the result of the payment to the LN wallet.

#### 11. LN Wallet Notifies User
- The LN wallet notifies the user of the result of the withdrawal attempt.

---
