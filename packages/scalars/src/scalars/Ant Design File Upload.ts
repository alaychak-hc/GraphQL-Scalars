// #region Developer Information
/*
 ********************************************
    Author: Andrew Laychak
    Email: ALaychak@harriscomputer.com

    Created At: 05-11-2022 11:57:10 PM
    Last Modified: 10-08-2022 05:17:24 PM
    Last Updated By: Andrew Laychak

    Description: Scalar for the upload file from an Ant Design File Upload component

    References:
      - None
 ********************************************
*/
// #endregion

// #region Imports
import { GraphQLError, GraphQLScalarType } from 'graphql';
// #endregion

// #region Ant Design File Upload Scalar
const AntDesignFileUploadScalar = new GraphQLScalarType({
  name: 'AntDesignFileUploadScalar',
  description:
    'The upload scalar that represents a file from an Ant Design File Upload component',
  parseValue(value: { originFileObj?: { promise: unknown } }) {
    if ('originFileObj' in value) return value;
    throw new GraphQLError('Ant Design - upload value invalid.');
  },
  parseLiteral(ast) {
    throw new GraphQLError('Ant Design - upload literal unsupported.', ast);
  },
});
// #endregion

// #region Exports
export default AntDesignFileUploadScalar;
// #endregion
