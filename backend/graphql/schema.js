const graphql = require('graphql')
const Category = require('../models/category')
const Expense = require('../models/expense')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  // GraphQLInt,
  // GraphQLList,
  // GraphQLNonNull,
  GraphQLFloat
} = graphql

const ExpenseType = new GraphQLObjectType({
  name: 'Expense',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    value: {
      type: GraphQLFloat
    },
    currency: {
      type: GraphQLString
    },
    category: {
      type: CategoryType,
      resolve (parent, args) {
        return Category.findById(parent.categoryId)
      }
    }
  })
})

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    expenses: {
      type: ExpenseType,
      resolve (parent, args) {
        return Expense.find({
          categoryId: parent.id
        })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    expense: {
      type: ExpenseType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve (parent, args) {
        return Expense.findById(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
