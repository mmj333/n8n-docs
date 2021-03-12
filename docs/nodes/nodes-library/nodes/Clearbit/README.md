---
permalink: /nodes/n8n-nodes-base.clearbit
description: Learn how to use the Clearbit node in n8n
---

# Clearbit

[Clearbit](https://clearbit.com/) provides powerful products, and data APIs like contact enrichment, lead generation, financial compliance, and more to help businesses grow.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Clearbit/README.md).
:::

## Basic Operations

::: details Company
- Look up person and company data based on an email or domain
- Auto-complete company names and retrieve logo and domain
:::

::: details Person
- Look up person and company data based on an email or domain
:::

## Example Usage

This workflow allows you to look up a person using their email in Clearbit. You can also find the [workflow](https://n8n.io/workflows/484) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Clearbit]()

The final workflow should look like the following image.

![A workflow with the Clearbit node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Clearbit node

1. First of all, you'll have to enter credentials for the Clearbit node. You can find out how to do that [here](../../../credentials/Clearbit/README.md).
2. Select the 'Person' option from the *Resource* dropdown list.
3. Enter the email of the person you want to look up in the *Email* field.
4. Click on *Execute Node* to run the workflow.