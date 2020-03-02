export enum ConfigErrorId {
  ConfigNotFound = 'ERROR_CONFIG_NOT_FOUND',
  ConfigVersionTooOld = 'ERROR_CONFIG_VERSION_TOO_OLD',
  InvalidFieldValue = 'ERROR_INVALID_FIELD_VALUE',
  MissingPathOrUrl = 'ERROR_MISSING_PATH_OR_URL',
  MissingRequiredField = 'ERROR_MISSING_REQUIRED_FIELD',
  UnauthorizedField = 'ERROR_UNAUTHORIZED_FIELD',
  UnauthorizedSubtileType = 'ERROR_UNAUTHORIZED_SUBTILE_TYPE',
  UnableToHydrate = 'ERROR_UNABLE_TO_HYDRATE',
  UnableToParseConfig = 'ERROR_UNABLE_TO_PARSE_CONFIG',
  UnexpectedError = 'ERROR_UNEXPECTED',
  UnknownTileType = 'ERROR_UNKNOWN_TILE_TYPE',
  UnknownVariant = 'ERROR_UNKNOWN_VARIANT',
  UnsupportedVersion = 'ERROR_UNSUPPORTED_VERSION',
}

export default ConfigErrorId
