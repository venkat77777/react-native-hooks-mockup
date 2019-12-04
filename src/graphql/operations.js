import gql from "graphql-tag";
require("babel-register");
require("@babel/polyfill/noConflict");

/*
 *          Misc
 */
const sendSMSCode = gql`
  mutation($isRegister: Boolean!, $loginID: String!) {
    sendSMSCode(isRegister: $isRegister, loginID: $loginID) {
      status
    }
  }
`;

const getAddressFromPostCode = gql`
  query($postCode: String!, $houseNo: String) {
    getAddressFromPostCode(postCode: $postCode, houseNo: $houseNo) {
      latitude
      longitude
      postcode
      thoroughfare
      building_name
      sub_building_name
      sub_building_number
      building_number
      line_1
      line_2
      line_3
      line_4
      locality
      town_or_city
      county
      district
      country
    }
  }
`;

const readKYCStatus = gql`
  query {
    readKYCStatus {
      profile
      homeAddress
      basicInfo
      identityDocs
      selfieUpload
      avCertification
      incomeDeclaration
      expenseDeclaration
      officeAddress
    }
  }
`;
/*
 *         User and Profile
 */
const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        loginID
        password
      }
    }
  }
`;
const readUser = gql`
  query {
    readUser {
      id
      loginID
    }
  }
`;

const readAuthenticatedUser = gql`
  query {
    readAuthenticatedUser {
      id
      loginID
    }
  }
`;

const updateUserPassword = gql`
  mutation($data: UpdateUserPasswordInput!) {
    updateUserPassword(data: $data) {
      id
      loginID
      password
    }
  }
`;

const deleteUser = gql`
  mutation {
    deleteUser {
      id
      loginID
    }
  }
`;

const login = gql`
  mutation($data: LoginUserInput!) {
    login(data: $data) {
      token
      user {
        id
        loginID
        password
        updatedAt
        createdAt
      }
      phoneVerified
    }
  }
`;

const createProfile = gql`
  mutation($data: CreateProfileInput!) {
    createProfile(data: $data) {
      id
      firstName
      lastName
      dateOfBirth
      phone
      phoneVerified
      hashDLT
      email
    }
  }
`;
const readProfile = gql`
  query(
    $where: ProfileWhereInput
    $orderBy: ProfileOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    readProfile(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      firstName
      lastName
      dateOfBirth
      phone
      phoneVerified
      hashDLT
      email
      avatarImage
      masterList {
        id
        title
        firstName
        lastName
        dateOfBirth
        phone
        profileString
        email
        avatarImage
      }
      invitee {
        id
        invitedUserNick
        invitedUser
        isProcessed
      }
    }
  }
`;

const updateProfile = gql`
  mutation($data: UpdateProfileInput!) {
    updateProfile(data: $data) {
      id
      firstName
      lastName
      dateOfBirth
      phone
      phoneVerified
      hashDLT
      email
      avatarImage
    }
  }
`;
const deleteProfile = gql`
  mutation($data: DeleteProfileInput!) {
    deleteProfile(data: $data) {
      id
    }
  }
`;

const verifyProfileSMSCode = gql`
  mutation($data: VerifyProfileOTP!) {
    verifyProfileSMSCode(data: $data) {
      phoneVerified
    }
  }
`;

const createAddress = gql`
  mutation($data: CreateAddressInput!) {
    createAddress(data: $data) {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const readAddress = gql`
  query {
    readAddress {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const updateAddress = gql`
  mutation($data: UpdateAddressInput!) {
    updateAddress(data: $data) {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const deleteAddress = gql`
  mutation($data: DeleteAddressInput!) {
    deleteAddress(data: $data) {
      id
    }
  }
`;

const createExpenseDeclaration = gql`
  mutation($data: CreateExpenseDeclarationInput!) {
    createExpenseDeclaration(data: $data) {
      id
      amount
      expenseType
      currency
      dependents
    }
  }
`;
const readExpenseDeclaration = gql`
  query {
    readExpenseDeclaration {
      id
      amount
      expenseType
      currency
      dependents
    }
  }
`;
const updateExpenseDeclaration = gql`
  mutation($data: UpdateExpenseDeclarationInput!) {
    updateExpenseDeclaration(data: $data) {
      id
      amount
      expenseType
      currency
      dependents
    }
  }
`;
const deleteExpenseDeclaration = gql`
  mutation($data: DeleteExpenseDeclarationInput!) {
    deleteExpenseDeclaration(data: $data) {
      id
    }
  }
`;

const createIncomeDeclaration = gql`
  mutation($data: CreateIncomeDeclarationInput!) {
    createIncomeDeclaration(data: $data) {
      id
      amount
      incomeType
      currency
    }
  }
`;
const readIncomeDeclaration = gql`
  query {
    readIncomeDeclaration {
      id
      amount
      incomeType
      currency
    }
  }
`;
const updateIncomeDeclaration = gql`
  mutation($data: UpdateIncomeDeclarationInput!) {
    updateIncomeDeclaration(data: $data) {
      id
      amount
      incomeType
      currency
    }
  }
`;
const deleteIncomeDeclaration = gql`
  mutation($data: DeleteIncomeDeclarationInput!) {
    deleteIncomeDeclaration(data: $data) {
      id
    }
  }
`;
const createMediaRecord = gql`
  mutation($data: CreateMediaRecordInput!) {
    createMediaRecord(data: $data) {
      id
      url
      mediaType
      message
    }
  }
`;
const readMediaRecord = gql`
  query {
    readMediaRecord {
      id
      url
      mediaType
      message
    }
  }
`;
const updateMediaRecord = gql`
  mutation($data: UpdateMediaRecordInput!) {
    updateMediaRecord(data: $data) {
      id
      url
      mediaType
      message
    }
  }
`;
const deleteMediaRecord = gql`
  mutation($data: DeleteMediaRecordInput!) {
    deleteMediaRecord(data: $data) {
      id
    }
  }
`;

const createLocationRecord = gql`
  mutation($data: CreateLocationRecordInput!) {
    createLocationRecord(data: $data) {
      id
      locationType
      lat
      lng
    }
  }
`;
const readLocationRecord = gql`
  query {
    readLocationRecord {
      id
      locationType
      lat
      lng
    }
  }
`;
const updateLocationRecord = gql`
  mutation($data: UpdateLocationRecordInput!) {
    updateLocationRecord(data: $data) {
      id
      locationType
      lat
      lng
    }
  }
`;
const deleteLocationRecord = gql`
  mutation($data: DeleteLocationRecordInput!) {
    deleteLocationRecord(data: $data) {
      id
    }
  }
`;
const createEmployerProfile = gql`
  mutation($data: CreateEmployerProfileInput!) {
    createEmployerProfile(data: $data) {
      id
      registeredName
      displayName
      taxID
      vatID
      lastSynchedOn
      nextRunOn
    }
  }
`;

const readEmployerProfile = gql`
  query {
    readEmployerProfile {
      id
      registeredName
      displayName
      taxID
      vatID
      lastSynchedOn
      nextRunOn
    }
  }
`;
const updateEmployerProfile = gql`
  mutation($data: UpdateEmployerProfileInput!) {
    updateEmployerProfile(data: $data) {
      id
      registeredName
      displayName
      taxID
      vatID
      lastSynchedOn
      nextRunOn
    }
  }
`;
const deleteEmployerProfile = gql`
  mutation($data: DeleteEmployerProfileInput!) {
    deleteEmployerProfile(data: $data) {
      id
    }
  }
`;

const createEmployerAddress = gql`
  mutation($data: CreateEmployerAddressInput!) {
    createEmployerAddress(data: $data) {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const readEmployerAddress = gql`
  query {
    readEmployerAddress {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const updateEmployerAddress = gql`
  mutation($data: UpdateEmployerAddressInput!) {
    updateEmployerAddress(data: $data) {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const deleteEmployerAddress = gql`
  mutation($data: DeleteEmployerAddressInput!) {
    deleteEmployerAddress(data: $data) {
      id
    }
  }
`;
const createEmployee = gql`
  mutation($data: CreateEmployeeInput!) {
    createEmployee(data: $data) {
      id
      employeeId
      title
      firstName
      lastName
      dateOfBirth
      phone
      email
      taxId
      joinDate
      leaveDate
      isActive
    }
  }
`;
const readEmployee = gql`
  query {
    readEmployee {
      id
      employeeId
      title
      firstName
      lastName
      dateOfBirth
      phone
      email
      taxId
      joinDate
      leaveDate
      isActive
    }
  }
`;
const updateEmployee = gql`
  mutation($data: UpdateEmployeeInput!) {
    updateEmployee(data: $data) {
      id
      employeeId
      title
      firstName
      lastName
      dateOfBirth
      phone
      email
      taxId
      joinDate
      leaveDate
      isActive
    }
  }
`;
const deleteEmployee = gql`
  mutation($data: DeleteEmployeeInput!) {
    deleteEmployee(data: $data) {
      id
    }
  }
`;

const createEmployeeEarning = gql`
  mutation($data: CreateEmployeeEarningInput!) {
    createEmployeeEarning(data: $data) {
      id
      employeeId
      frequency
      month
      year
      start
      end
      hoursWorked
      payRollProcessed
    }
  }
`;
const readEmployeeEarning = gql`
  query {
    readEmployeeEarning {
      id
      employeeId
      frequency
      month
      year
      start
      end
      hoursWorked
      payRollProcessed
    }
  }
`;
const updateEmployeeEarning = gql`
  mutation($data: UpdateEmployeeEarningInput!) {
    updateEmployeeEarning(data: $data) {
      id
      employeeId
      frequency
      month
      year
      start
      end
      hoursWorked
      payRollProcessed
    }
  }
`;
const deleteEmployeeEarning = gql`
  mutation($data: DeleteEmployeeEarningInput!) {
    deleteEmployeeEarning(data: $data) {
      id
    }
  }
`;

const createEmployeeAddress = gql`
  mutation($data: CreateEmployeeAddressInput!) {
    createEmployeeAddress(data: $data) {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const readEmployeeAddress = gql`
  query {
    readEmployeeAddress {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const updateEmployeeAddress = gql`
  mutation($data: UpdateEmployeeAddressInput!) {
    updateEmployeeAddress(data: $data) {
      id
      addressType
      addressLine1
      addressLine2
      addressLine3
      city
      country
      zip
    }
  }
`;
const deleteEmployeeAddress = gql`
  mutation($data: DeleteEmployeeAddressInput!) {
    deleteEmployeeAddress(data: $data) {
      id
    }
  }
`;
/*******************************************************************************
 *
 *                      System Masters
 *
 *******************************************************************************/

const createBrand = gql`
  mutation($data: CreateBrandInput!) {
    createBrand(data: $data) {
      id
      name
      brandName
      brandLogoUrl
      brandCardUrl
    }
  }
`;
const readBrand = gql`
  query(
    $where: BrandWhereInput
    $orderBy: BrandOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    readBrand(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      name
      brandName
      brandLogoUrl
      brandCardUrl
      category {
        id
        name
      }
    }
  }
`;
const updateBrand = gql`
  mutation($data: UpdateBrandInput!) {
    updateBrand(data: $data) {
      id
      name
      brandName
      brandLogoUrl
      brandCardUrl
    }
  }
`;
const deleteBrand = gql`
  mutation($data: DeleteBrandInput!) {
    deleteBrand(data: $data) {
      id
    }
  }
`;

const createVendor = gql`
  mutation($data: CreateVendorInput!) {
    createVendor(data: $data) {
      id
      name
      vendorName
      vendorId
    }
  }
`;
const readVendor = gql`
  query {
    readVendor {
      id
      name
      vendorName
      vendorId
    }
  }
`;
const updateVendor = gql`
  mutation($data: UpdateVendorInput!) {
    updateVendor(data: $data) {
      id
      name
      vendorName
      vendorId
    }
  }
`;
const deleteVendor = gql`
  mutation($data: DeleteVendorInput!) {
    deleteVendor(data: $data) {
      id
    }
  }
`;

const createRoute = gql`
  mutation($data: CreateRouteInput!) {
    createRoute(data: $data) {
      id
      name
      brandAlias
      isActive
      isLocked
      lockType
    }
  }
`;
const readRoute = gql`
  query {
    readRoute {
      id
      name
      brandAlias
      isActive
      isLocked
      lockType
    }
  }
`;
const updateRoute = gql`
  mutation($data: UpdateRouteInput!) {
    updateRoute(data: $data) {
      id
      name
      brandAlias
      isActive
      isLocked
      lockType
    }
  }
`;
const deleteRoute = gql`
  mutation($data: DeleteRouteInput!) {
    deleteRoute(data: $data) {
      id
    }
  }
`;

/*******************************************************************************
 *
 *                      Display
 *
 *******************************************************************************/
const createGradient = gql`
  mutation($data: CreateGradientInput!) {
    createGradient(data: $data) {
      id
      color
      startValue
      endValue
    }
  }
`;
const readGradient = gql`
  query {
    readGradient {
      id
      color
      startValue
      endValue
    }
  }
`;
const updateGradient = gql`
  mutation($data: UpdateGradientInput!) {
    updateGradient(data: $data) {
      id
      color
      startValue
      endValue
    }
  }
`;
const deleteGradient = gql`
  mutation($data: DeleteGradientInput!) {
    deleteGradient(data: $data) {
      id
    }
  }
`;

const createCategoryDisplay = gql`
  mutation($data: CreateCategoryDisplayInput!) {
    createCategoryDisplay(data: $data) {
      id
      backgroundPublicId
      cardBackgroundPublicId
      primaryColor
      secondaryColor
      optionalColor
    }
  }
`;
const readCategoryDisplay = gql`
  query {
    readCategoryDisplay {
      id
      backgroundPublicId
      cardBackgroundPublicId
      primaryColor
      secondaryColor
      optionalColor
    }
  }
`;
const updateCategoryDisplay = gql`
  mutation($data: UpdateCategoryDisplayInput!) {
    updateCategoryDisplay(data: $data) {
      id
      backgroundPublicId
      cardBackgroundPublicId
      primaryColor
      secondaryColor
      optionalColor
    }
  }
`;
const deleteCategoryDisplay = gql`
  mutation($data: DeleteCategoryDisplayInput!) {
    deleteCategoryDisplay(data: $data) {
      id
    }
  }
`;

const createCategory = gql`
  mutation($data: CreateCategoryInput!) {
    createCategory(data: $data) {
      id
      name
      displayText
      slug
      publicId
    }
  }
`;
const readCategory = gql`
  query {
    readCategory {
      id
      name
      displayText
      slug
      publicId
      categoryDisplay {
        id
        name
        backgroundPublicId
        cardBackgroundPublicId
        primaryColor
        secondaryColor
        optionalColor
        gradient {
          id
          name
          color
          startValue
          endValue
        }
      }
    }
  }
`;
const updateCategory = gql`
  mutation($data: UpdateCategoryInput!) {
    updateCategory(data: $data) {
      id
      name
      displayText
      slug
      publicId
    }
  }
`;
const deleteCategory = gql`
  mutation($data: DeleteCategoryInput!) {
    deleteCategory(data: $data) {
      id
    }
  }
`;

const createApplication = gql`
  mutation($data: CreateApplicationInput!) {
    createApplication(data: $data) {
      id
      currency
      amount
      rate
      duration
      status
    }
  }
`;
const readApplication = gql`
  query(
    $where: ApplicationWhereInput
    $orderBy: ApplicationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    readApplication(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      currency
      amount
      rate
      duration
      status
      brand {
        id
        brandLogoUrl
        category {
          id
        }
      }
      updatedAt
      createdAt
    }
  }
`;
const updateApplication = gql`
  mutation($data: UpdateApplicationInput!) {
    updateApplication(data: $data) {
      id
      currency
      amount
      rate
      duration
      status
    }
  }
`;
const deleteApplication = gql`
  mutation($data: DeleteApplicationInput!) {
    deleteApplication(data: $data) {
      id
    }
  }
`;

const createApplicationResponse = gql`
  mutation($data: CreateApplicationResponseInput!) {
    createApplicationResponse(data: $data) {
      id
      currency
      amount
      rate
      duration
      status
    }
  }
`;

const createApproval = gql`
  mutation($data: CreateApprovalInput!) {
    createApproval(data: $data) {
      id
      currency
      amount
      rate
      duration
      status
    }
  }
`;
const readApproval = gql`
  query {
    readApproval {
      id
      currency
      amount
      rate
      duration
      status
    }
  }
`;
const updateApproval = gql`
  mutation($data: UpdateApprovalInput!) {
    updateApproval(data: $data) {
      id
      currency
      amount
      rate
      duration
      status
    }
  }
`;
const deleteApproval = gql`
  mutation($data: DeleteApprovalInput!) {
    deleteApproval(data: $data) {
      id
    }
  }
`;
const createCardRequest = gql`
  mutation($data: CreateCardRequestInput!) {
    createCardRequest(data: $data) {
      id
      status
    }
  }
`;
const readCardRequest = gql`
  query {
    readCardRequest {
      id
      status
    }
  }
`;
const updateCardRequest = gql`
  mutation($data: UpdateCardRequestInput!) {
    updateCardRequest(data: $data) {
      id
      status
    }
  }
`;
const deleteCardRequest = gql`
  mutation($data: DeleteCardRequestInput!) {
    deleteCardRequest(data: $data) {
      id
    }
  }
`;

const createCardResponse = gql`
  mutation($data: CreateCardResponseInput!) {
    createCardResponse(data: $data) {
      id
      status
    }
  }
`;
const readCardResponse = gql`
  query {
    readCardResponse {
      id
      status
    }
  }
`;
const updateCardResponse = gql`
  mutation($data: UpdateCardResponseInput!) {
    updateCardResponse(data: $data) {
      id
      status
    }
  }
`;
const deleteCardResponse = gql`
  mutation($data: DeleteCardResponseInput!) {
    deleteCardResponse(data: $data) {
      id
    }
  }
`;

const createCard = gql`
  mutation($data: CreateCardInput!) {
    createCard(data: $data) {
      id
      accountNumber
      balance
      securityPin
      barCodeImage
      barCodeHeight
      barCodeWidth
      cardImage
      cardImage1
      cardImage2
      cardImage3
      cardHeight
      cardWidth
      instructions
      isArchived
      isGift
      isDummy
      expiry
      status
      spenders {
        id
        firstName
        lastName
        avatarImage
      }
      invitee {
        id
        invitedUserNick
        invitedUser
      }
    }
  }
`;
const readCard = gql`
  query(
    $where: CardWhereInput
    $orderBy: CardOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    readCard(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      accountNumber
      balance
      securityPin
      barCodeImage
      barCodeHeight
      barCodeWidth
      cardImage
      cardImage1
      cardImage2
      cardImage3
      cardHeight
      cardWidth
      instructions
      isArchived
      isGift
      isDummy
      expiry
      status
      profile {
        id
      }
      brand {
        id
        name
        brandLogoUrl
        brandCardUrl
        category {
          id
          name
        }
      }
      spenders {
        id
        firstName
        lastName
        phone
        avatarImage
      }
      invitee {
        id
        invitedUserNick
        invitedUser
      }
    }
  }
`;
const updateCard = gql`
  mutation($data: UpdateCardInput!) {
    updateCard(data: $data) {
      id
      accountNumber
      balance
      securityPin
      barCodeImage
      barCodeHeight
      barCodeWidth
      cardImage
      cardImage1
      cardImage2
      cardImage3
      cardHeight
      cardWidth
      instructions
      isArchived
      isGift
      isDummy
      expiry
      status
      spenders {
        id
        firstName
        lastName
        avatarImage
      }
      invitee {
        id
        invitedUserNick
        invitedUser
      }
    }
  }
`;
const deleteCard = gql`
  mutation($data: DeleteCardInput!) {
    deleteCard(data: $data) {
      id
    }
  }
`;
const createTransaction = gql`
  mutation($data: CreateTransactionInput!) {
    createTransaction(data: $data) {
      id
    }
  }
`;

const createJournalVoucher = gql`
  mutation($data: CreateJournalVoucherInput!) {
    createJournalVoucher(data: $data) {
      id
    }
  }
`;

const createLedger = gql`
  mutation($data: CreateLedgerInput!) {
    createLedger(data: $data) {
      id
    }
  }
`;

const createHeartBeat = gql`
  mutation($data: CreateHeartBeatInput!) {
    createHeartBeat(data: $data) {
      id
      timeStamp
      updatedAt
      createdAt
    }
  }
`;
const readHeartBeat = gql`
  query {
    readHeartBeat {
      id
      timeStamp
      updatedAt
      createdAt
    }
  }
`;
const updateHeartBeat = gql`
  mutation($data: UpdateHeartBeatInput!) {
    updateHeartBeat(data: $data) {
      id
      timeStamp
      updatedAt
      createdAt
    }
  }
`;
const deleteHeartBeat = gql`
  mutation($data: DeleteHeartBeatInput!) {
    deleteHeartBeat(data: $data) {
      id
    }
  }
`;

/*
 *        Subscribe
 *
 */
const subscribeToProfiles = gql`
  subscription($where: ProfileSubscriptionWhereInput) {
    profile(where: $where) {
      mutation
      updatedFields
      node {
        id
        title
        firstName
        lastName
        dateOfBirth
        phone
        phoneVerified
        email
        avatarImage
        newsUpdate
        instantNotification
        marketingNotification
        masterList {
          id
          title
          firstName
          lastName
          dateOfBirth
          phone
          profileString
          email
          avatarImage
        }
        invitee {
          id
          invitedUserNick
          invitedUser
          isProcessed
        }
        user {
          id
        }
      }
      previousValues {
        id
        title
        firstName
        lastName
        dateOfBirth
        phone
        phoneVerified
        email
        avatarImage
        newsUpdate
        instantNotification
        marketingNotification
      }
    }
  }
`;

const subscribeToApplications = gql`
  subscription($where: ApplicationSubscriptionWhereInput) {
    application(where: $where) {
      mutation
      updatedFields
      node {
        id
        currency
        amount
        rate
        duration
        status
        profile {
          id
          user {
            id
          }
        }
        brand {
          id
          name
          brandName
          brandLogoUrl
          brandCardUrl
          category {
            id
            name
            displayText
            publicId
          }
        }
        updatedAt
        createdAt
      }
      previousValues {
        id
        currency
        amount
        rate
        duration
        status
      }
    }
  }
`;

const subscribeToCards = gql`
  subscription($where: CardSubscriptionWhereInput) {
    card(where: $where) {
      mutation
      updatedFields
      node {
        id
        accountNumber
        balance
        securityPin
        barCodeImage
        barCodeHeight
        barCodeWidth
        cardImage
        cardImage1
        cardImage2
        cardImage3
        cardWidth
        cardHeight
        instructions
        isArchived
        isGift
        isDummy
        expiry
        profile {
          id
        }
        status
        brand {
          id
          name
          brandLogoUrl
          brandCardUrl
          category {
            id
            name
          }
        }
        spenders {
          id
          firstName
          lastName
          phone
          avatarImage
        }
        invitee {
          id
          invitedUserNick
          invitedUser
        }
      }
      previousValues {
        id
        accountNumber
        balance
        securityPin
        barCodeImage
        barCodeHeight
        barCodeWidth
        cardImage
        cardImage1
        cardImage2
        cardImage3
        cardWidth
        instructions
        isArchived
        isGift
        isDummy
        expiry
        status
      }
    }
  }
`;

const subscribeToHeartBeat = gql`
  subscription {
    heartBeat {
      mutation
      updatedFields
      node {
        timeStamp
      }
    }
  }
`;

export {
  sendSMSCode,
  getAddressFromPostCode,
  readKYCStatus,
  createUser,
  readUser,
  readAuthenticatedUser,
  updateUserPassword,
  deleteUser,
  login,
  createProfile,
  readProfile,
  updateProfile,
  deleteProfile,
  verifyProfileSMSCode,
  createAddress,
  readAddress,
  updateAddress,
  deleteAddress,
  readExpenseDeclaration,
  createExpenseDeclaration,
  updateExpenseDeclaration,
  deleteExpenseDeclaration,
  readIncomeDeclaration,
  createIncomeDeclaration,
  updateIncomeDeclaration,
  deleteIncomeDeclaration,
  createMediaRecord,
  readMediaRecord,
  updateMediaRecord,
  deleteMediaRecord,
  createLocationRecord,
  readLocationRecord,
  updateLocationRecord,
  deleteLocationRecord,
  createEmployerProfile,
  readEmployerProfile,
  updateEmployerProfile,
  deleteEmployerProfile,
  createEmployerAddress,
  readEmployerAddress,
  updateEmployerAddress,
  deleteEmployerAddress,
  createEmployee,
  readEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployeeEarning,
  readEmployeeEarning,
  updateEmployeeEarning,
  deleteEmployeeEarning,
  createEmployeeAddress,
  readEmployeeAddress,
  updateEmployeeAddress,
  deleteEmployeeAddress,
  createBrand,
  readBrand,
  updateBrand,
  deleteBrand,
  createVendor,
  readVendor,
  updateVendor,
  deleteVendor,
  createRoute,
  readRoute,
  updateRoute,
  deleteRoute,
  createGradient,
  readGradient,
  updateGradient,
  deleteGradient,
  createCategoryDisplay,
  readCategoryDisplay,
  updateCategoryDisplay,
  deleteCategoryDisplay,
  createCategory,
  readCategory,
  updateCategory,
  deleteCategory,
  createApplication,
  readApplication,
  updateApplication,
  deleteApplication,
  createApproval,
  readApproval,
  updateApproval,
  deleteApproval,
  createCardRequest,
  readCardRequest,
  updateCardRequest,
  deleteCardRequest,
  createCardResponse,
  readCardResponse,
  updateCardResponse,
  deleteCardResponse,
  createCard,
  readCard,
  updateCard,
  deleteCard,
  subscribeToProfiles,
  createTransaction,
  createJournalVoucher,
  createLedger,
  createHeartBeat,
  readHeartBeat,
  updateHeartBeat,
  deleteHeartBeat,
  subscribeToApplications,
  subscribeToCards,
  subscribeToHeartBeat
};
